// Saves options to chrome.storage
function save_options() {
  var adTolerance = document.getElementById('adTolerance').value;
  var blockOnSize = document.getElementById('blockOnSize').checked;
  var blockWidth = document.getElementById('blockWidth').value;
  var blockHeight = document.getElementById('blockHeight').value;

  chrome.storage.sync.set({
    adTolerance: adTolerance,
    blockOnSize: blockOnSize,
    blockWidth: blockWidth,
    blockHeight: blockHeight,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores state using the preferences stored in chrome.storage.
function restore_options() {
  // Use default tolerance 100.
  chrome.storage.sync.get({
    adTolerance: 100,
    blockOnSize: false,
    blockWidth: 0,
    blockHeight: 0,
  }, function(items) {
    document.getElementById('adTolerance').value = items.adTolerance;
    document.getElementById('blockOnSize').checked = items.blockOnSize;
    document.getElementById('blockWidth').value = items.blockWidth;
    document.getElementById('blockHeight').value = items.blockHeight;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
                                                 save_options);
