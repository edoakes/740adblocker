// Saves options to chrome.storage.sync.
function save_options() {
  var fbsidebar = document.getElementById('fbsidebar').value;
  var fbnewsfeed = document.getElementById('fbnewsfeed').value;
  var actolerance = document.getElementById('actolerance').value;
  var remove = document.getElementById('remove').checked;

  chrome.storage.sync.set({
    fbsidebar: fbsidebar,
    fbnewsfeed: fbnewsfeed,
    actolerance: actolerance,
    remove: remove,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Resets options to their default values
function default_options() {
  document.getElementById('fbsidebar').value = "0.5";
  document.getElementById('fbsidebar').refresh();
  document.getElementById('fbnewsfeed').value = "0.5";
  document.getElementById('fbnewsfeed').refresh();
  document.getElementById('actolerance').value = "0.5";
  document.getElementById('actolerance').refresh();
  document.getElementById('remove').checked = "false";

  chrome.storage.sync.set({
    fbsidebar: fbsidebar,
    fbnewsfeed: fbnewsfeed,
    actolerance: actolerance,
    remove: remove,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    fbsidebar: 0.5,
    fbnewsfeed: 0.5,
    actolerance: 0.5,
    remove: false,
  }, function(items) {
    document.getElementById('fbsidebar').value = items.fbsidebar;
    document.getElementById('fbnewsfeed').value = items.fbnewsfeed;
    document.getElementById('actolerance').value = items.actolerance;
    document.getElementById('remove').checked = items.remove;
    document.getElementById('color').value = items.favoriteColor;
    document.getElementById('like').checked = items.likesColor;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
document.getElementById('defaults').addEventListener('click',
    default_options);
