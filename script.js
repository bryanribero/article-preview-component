class SharePanel {
  constructor() {
    this.iconShare = document.getElementById("share")
    this.divDisplay = document.getElementById("content-display")
    this.isVisible = false
    this.isAnimating = false

    this.init()
  }

  init() {
   
    this.iconShare.addEventListener("click", this.handleClick.bind(this))
    window.addEventListener("resize", this.handleResize.bind(this))

    
    document.addEventListener("click", this.handleOutsideClick.bind(this))
  }

  handleClick(event) {
    event.stopPropagation()

    if (this.isAnimating) return

    this.iconShare.classList.toggle("active")

    if (!this.isVisible) {
      this.showPanel()
    } else {
      this.hidePanel()
    }
  }

  handleResize() {
    
    if (this.isVisible && !this.isAnimating) {
      this.positionPanel()
    }
  }

  handleOutsideClick(event) {
    if (this.isVisible && !this.divDisplay.contains(event.target) && !this.iconShare.contains(event.target)) {
      this.hidePanel()
    }
  }

  positionPanel() {
    const isDesktop = window.innerWidth >= 750

    if (isDesktop) {
      const position = this.iconShare.getBoundingClientRect()
      this.divDisplay.style.top = `${position.top - 90 + window.scrollY}px`
      this.divDisplay.style.left = `${position.left - 110 + window.scrollX}px`
      this.divDisplay.style.bottom = ""
      this.divDisplay.style.right = ""
    } else {
      this.divDisplay.style.top = ""
      this.divDisplay.style.left = ""
      this.divDisplay.style.bottom = "0"
      this.divDisplay.style.right = "0"
    }
  }

  showPanel() {
    if (this.isAnimating) return

    this.isAnimating = true
    this.isVisible = true

    
    this.positionPanel()

    
    this.divDisplay.style.display = "flex"
    this.divDisplay.classList.add("show")

    
    void this.divDisplay.offsetWidth

   
    this.divDisplay.style.opacity = "1"
    this.divDisplay.style.transform = window.innerWidth >= 750 ? "translateY(0)" : "translateY(0)"

    setTimeout(() => {
      this.isAnimating = false
    }, 300)
  }

  hidePanel() {
    if (this.isAnimating) return

    this.isAnimating = true
    this.isVisible = false
    this.iconShare.classList.remove("active")


    this.divDisplay.style.opacity = "0"
    this.divDisplay.style.transform = window.innerWidth >= 750 ? "translateY(10px)" : "translateY(100px)"

    setTimeout(() => {
      this.divDisplay.style.display = "none"
      this.divDisplay.classList.remove("show")
      this.isAnimating = false
    }, 300)
  }
}

  new SharePanel();
