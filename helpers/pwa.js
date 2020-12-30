export default () => {
  //* ** Determine whether or not the PWA has been installed. ***//

  // Step 1: Check local storage
  let pwaInstalled = localStorage.getItem('pwaInstalled') === 'yes'

  // Step 2: Check if the display-mode is standalone. (Only permitted for PWAs.)
  if (window.matchMedia('(display-mode: standalone)').matches) {
    localStorage.setItem('pwaInstalled', 'yes')
    pwaInstalled = true
  }

  // Step 3: Check if the navigator is in standalone mode. (Again, only permitted for PWAs.)
  if (window.navigator.standalone === true) {
    localStorage.setItem('pwaInstalled', 'yes')
    pwaInstalled = true
  }
  if (pwaInstalled) {
    document.getElementById('installPWA').style.display = 'none'
  } else {
    document.getElementById('installPWA').style.display = 'inline-flex'
  }
  //* ** If the PWA has not been installed, show the install PWA prompt.. ***//
  let deferredPrompt = null
  window.addEventListener('beforeinstallprompt', (event) => {
    deferredPrompt = event
  })
  // When the app is installed, remove install prompts.
  window.addEventListener('appinstalled', (event) => {
    localStorage.setItem('pwaInstalled', 'yes')
    pwaInstalled = true
    document.getElementById('installPWA').style.display = 'none'
  })

  // When the app is uninstalled, add the prompts back
  return async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const outcome = await deferredPrompt.userChoice

      if (outcome === 'accepted') {
        /* eslint-disable no-console */
        console.log('Web App was installed successfully.')
      } else {
        /* eslint-disable no-console */
        console.log('Web App could not be installed. (Installation rejected by user.')
      }
      deferredPrompt = null
    }
  }
}
