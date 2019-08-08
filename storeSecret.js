// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-green; icon-glyph: magic;
// Securely store a secret to the Keychain.
let prompt = new Alert()
prompt.title = Script.name() + ".js"
prompt.addTextField("Key", "")
prompt.addSecureTextField("Value", "")
prompt.addAction("OK")
prompt.addCancelAction("Cancel")
prompt.presentAlert().then(resp => {
  if (resp != 0) {
    console.log("cancelled")
  } else {
    key = prompt.textFieldValue(0)
    value = prompt.textFieldValue(1)
    Keychain.set(key, value)
    console.log("stored")
  }
}).catch(err => {
  logError("error")
})
Script.complete()