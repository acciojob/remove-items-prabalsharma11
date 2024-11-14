//your JS code here. If required.
const slc = document.getElementById('colorSelect')
      const btn = document.querySelector('input[type="button"]')
      btn.addEventListener('click', () => {
        const opt = slc.options[slc.selectedIndex]
        if (opt) {
          slc.removeChild(opt)
        }
      })