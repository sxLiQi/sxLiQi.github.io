;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M760.672616 62.534242 263.326361 62.534242c-19.780509 0-35.815717 15.783475-35.815717 35.253922l0 828.422649c0 19.470447 16.035208 35.253922 35.815717 35.253922l497.346255 0c19.780509 0 35.815717-15.783475 35.815717-35.253922L796.488333 97.788164C796.488333 78.31874 780.453125 62.534242 760.672616 62.534242zM482.069317 111.140263l59.860343 0c11.019984 0 19.953448 8.933463 19.953448 19.953448 0 11.019984-8.933463 19.953448-19.953448 19.953448l-59.860343 0c-11.019984 0-19.953448-8.933463-19.953448-19.953448C462.115869 120.073726 471.049333 111.140263 482.069317 111.140263zM551.906895 918.487921l-79.81379 0L472.093105 838.674131l79.81379 0L551.906895 918.487921zM736.092801 779.502473c0 19.780509-16.035208 35.815717-35.815717 35.815717L323.722916 815.31819c-19.780509 0-35.815717-16.035208-35.815717-35.815717L287.907199 209.552643c0-19.780509 16.035208-35.815717 35.815717-35.815717l376.554168 0c19.780509 0 35.815717 16.035208 35.815717 35.815717L736.092801 779.502473z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-biaoqing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M945.424922 509.059018c0-240.652965-195.076954-435.727873-435.726849-435.727873-240.651942 0-435.727873 195.074907-435.727873 435.727873 0 240.662175 195.075931 435.737082 435.727873 435.737082 98.792027 0 189.248202-33.611515 262.339894-88.998987 3.003404-3.40761 4.975315-7.753591 4.975315-12.637832 0-10.666944-8.651031-19.315928-19.315928-19.315928-5.53404 0-10.464329 2.194992-13.981433 5.91471l-0.246617 0c-65.407686 48.12916-145.915277 76.945463-233.346559 76.945463-217.908962 0-394.587893-176.701444-394.587893-394.598126 0-217.931474 176.678932-394.588917 394.587893-394.588917 217.930451 0 394.58687 176.657442 394.58687 394.588917 0 66.571185-15.617699 129.220037-44.74611 184.229908l0 0.323365c-0.536212 1.838881-1.122567 3.631714-1.122567 5.602601 0 10.666944 8.650007 19.315928 19.314904 19.315928 8.312316 0 15.259542-5.335519 17.971303-12.68388l0 0.1361C927.164023 649.080052 945.424922 581.210291 945.424922 509.059018zM395.534963 391.95902c0-24.334221-19.71911-44.052309-44.053332-44.052309-24.334221 0-44.052309 19.718087-44.052309 44.052309 0 24.334221 19.718087 44.029796 44.052309 44.029796C375.815853 435.989839 395.534963 416.294264 395.534963 391.95902zM669.125085 347.974249c-24.314779 0-44.030819 19.696598-44.030819 44.029796s19.717064 44.052309 44.030819 44.052309c24.332175 0 44.052309-19.71911 44.052309-44.052309C713.17637 367.669824 693.456237 347.974249 669.125085 347.974249zM680.214654 642.001843c-2.62171 0-5.063319 0.647753-7.370875 1.477654l-0.201591 0c-49.497321 22.382776-104.283088 34.728966-162.137751 34.728966-58.752102 0-114.322745-12.097526-164.423817-35.111682l-0.448208 0c-1.74576-0.468674-3.473101-1.095961-5.377474-1.095961-11.965519 0-21.621437 9.655917-21.621437 21.597901 0 7.912204 5.685489 15.400758 12.027941 19.173688-0.169869-0.075725-0.297782-0.132006 0.048095 0.028653 54.629201 24.670889 116.382661 39.593763 180.219571 39.593763 64.24214 0 124.875079-14.564717 179.772386-39.526225 6.721075-3.697205 11.293207-10.891048 11.293207-19.114336C701.994704 651.726322 692.224176 642.001843 680.214654 642.001843z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tupian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M176.957783 959.379237c-62.300928 0-113.085568-50.686403-113.208365-112.988354l-1.309832-668.609851c-0.059352-30.137391 11.689227-58.561767 33.080419-80.037894 21.391193-21.475104 49.76952-33.335223 79.906911-33.393551l670.26863-1.312902c62.301951 0 113.086591 50.686403 113.207341 112.988354l1.309832 668.608827c0.060375 30.137391-11.688203 58.56279-33.080419 80.037894-21.391193 21.475104-49.76952 33.335223-79.906911 33.393551L176.957783 959.379237zM845.69657 104.521518l-0.14224 0-670.046572 1.312902c-19.056008 0.036839-37.025265 7.561209-50.596352 21.185508-13.571087 13.625322-21.024849 31.623231-20.986987 50.679239l1.309832 668.609851c0.077771 39.47199 32.252565 71.585385 71.723531 71.585385l0.14224 0 670.046572-1.313925c19.057031-0.036839 37.025265-7.560186 50.596352-21.184485s21.024849-31.623231 20.986987-50.679239l-1.309832-668.609851C917.343353 136.63389 885.16856 104.521518 845.69657 104.521518z"  ></path>' +
    '' +
    '<path d="M924.312068 580.791759c-220.62584-235.240699-591.500659-247.13254-826.743404-26.505677l-28.378327-30.259164c61.72276-57.887408 132.907009-101.95916 211.574696-130.98831 75.985602-28.039613 155.722644-40.940434 236.998739-38.331004 81.275072 2.605338 160.0236 20.583804 234.057757 53.43398 76.646658 34.009582 144.862295 82.549088 202.750727 144.272871L924.312068 580.791759z"  ></path>' +
    '' +
    '<path d="M511.328199 813.365722c-84.943624 0-154.049538-69.105914-154.049538-154.049538s69.105914-154.049538 154.049538-154.049538 154.048515 69.105914 154.048515 154.049538S596.2708 813.365722 511.328199 813.365722zM511.328199 546.751478c-62.068637 0-112.564705 50.497091-112.564705 112.564705 0 62.068637 50.496068 112.565728 112.564705 112.565728 62.067614 0 112.564705-50.497091 112.564705-112.565728C623.892905 597.248569 573.395814 546.751478 511.328199 546.751478z"  ></path>' +
    '' +
    '<path d="M777.660011 246.447948m-54.001915 0a52.772 52.772 0 1 0 108.003829 0 52.772 52.772 0 1 0-108.003829 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrowleft" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M358.899578 511.536442l383.478881-383.506511-76.68452 0L282.161846 511.536442l383.53107 383.53107 76.68452 0L358.899578 511.536442 358.899578 511.536442z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiahao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.376807 65.484434c-246.425436 0-446.895213 200.469777-446.895213 446.86656 0 246.425436 200.469777 446.895213 446.895213 446.895213s446.895213-200.469777 446.895213-446.895213C958.27202 265.954211 757.802242 65.484434 511.376807 65.484434L511.376807 65.484434zM511.376807 912.125003c-220.446761 0-399.780149-179.327248-399.780149-399.774009 0-220.418109 179.333388-399.750473 399.780149-399.750473s399.778102 179.331341 399.778102 399.750473C911.154909 732.797755 731.823568 912.125003 511.376807 912.125003L511.376807 912.125003zM679.933757 480.21304 543.198559 480.21304 543.198559 343.794044c0-13.004175-18.410302-23.558555-31.414477-23.558555-13.004175 0-31.40936 10.55438-31.40936 23.558555l0 136.418996L342.819856 480.21304c-13.004175 0-23.557532 18.410302-23.557532 31.414477 0 13.004175 10.553357 31.40936 23.557532 31.40936L480.374722 543.036877l0 137.89972c0 13.004175 18.405185 23.557532 31.40936 23.557532 13.004175 0 31.414477-10.553357 31.414477-23.557532L543.198559 543.036877l136.736221 0c13.004175 0 23.557532-18.405185 23.557532-31.40936C703.491289 498.623341 692.966585 480.21304 679.933757 480.21304L679.933757 480.21304zM679.933757 480.21304"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-mic" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M486.4 716.8c-98.816 0-179.2-80.384-179.2-179.2l0-307.2c0-98.816 80.384-179.2 179.2-179.2s179.2 80.384 179.2 179.2l0 307.2c0 98.816-80.384 179.2-179.2 179.2zM486.4 102.4c-70.5536 0-128 57.4464-128 128l0 307.2c0 70.5536 57.4464 128 128 128s128-57.4464 128-128l0-307.2c0-70.5536-57.4464-128-128-128z"  ></path>' +
    '' +
    '<path d="M819.2 537.6c0-14.1312-11.4688-25.6-25.6-25.6s-25.6 11.4688-25.6 25.6c0 155.2896-126.3104 281.6-281.6 281.6s-281.6-126.3104-281.6-281.6c0-14.1312-11.4688-25.6-25.6-25.6s-25.6 11.4688-25.6 25.6c0 174.8992 135.6288 318.72 307.2 331.8272l0 103.3728-76.8 0c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6l204.8 0c14.1312 0 25.6-11.4688 25.6-25.6s-11.4688-25.6-25.6-25.6l-76.8 0 0-103.3728c171.5712-13.1072 307.2-156.928 307.2-331.8272z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-geren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M739.415268 640.314575c-9.964946 13.136065-7.491216 32.08704 5.526236 42.213471 96.111066 74.816407 151.236237 188.265021 151.236237 311.271294 0 16.663024 13.369004 30.20066 29.803376 30.20066 16.422939 0 29.776224-13.537635 29.776224-30.20066 0-142.014411-63.61674-272.922044-174.52017-359.145335C768.566986 624.729074 749.067246 627.431457 739.415268 640.314575L739.415268 640.314575zM98.044606 1024c16.418652 0 29.776224-13.537635 29.776224-30.20066 0-215.824748 172.349403-391.412438 384.182743-391.412438 163.183311 0 295.935881-135.079106 295.935881-301.120569C807.938025 135.147701 675.185455 0 512.002144 0 348.814545 0 216.061975 135.147701 216.061975 301.266334c0 109.950236 60.27699 211.89479 154.926111 264.357593C191.90059 626.957004 68.241229 800.572568 68.241229 993.79934 68.241229 1010.462365 81.610234 1024 98.044606 1024L98.044606 1024zM512.002144 60.545656c130.330287 0 236.356281 107.983828 236.356281 240.720678 0 132.73685-106.024565 240.726395-236.356281 240.726395-130.241684 0-236.193366-107.989544-236.193366-240.726395C275.808777 168.529484 381.761889 60.545656 512.002144 60.545656L512.002144 60.545656zM512.002144 60.545656"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M772.563946 296.40678c-39.380916 0-84.502579-27.996634-100.636025-47.311539l-43.714617-52.253084c-11.048637-13.175067-30.363542-28.9084-59.815317-28.9084L456.249767 167.933757c-30.219255 0-46.6249 12.32777-63.253626 32.234145l-41.427528 49.566906c-16.341177 19.47454-62.086034 46.671972-99.484805 46.671972-11.879562 0-21.473057-9.609869-21.473057-21.537526 0-11.879562 9.593496-21.521153 21.473057-21.521153 23.296589 0 57.560974-20.577664 66.514903-31.322379l41.427528-49.51881c19.682271-23.552415 46.512337-47.600111 96.222505-47.600111l112.14822 0c48.462758 0 78.922491 27.740808 92.78522 44.322461l42.578748 50.909483c10.264784 12.263301 43.74634 33.209356 68.800969 33.209356 11.879562 0 21.473057 9.641591 21.473057 21.521153C794.037003 286.797935 784.443507 296.40678 772.563946 296.40678L772.563946 296.40678zM834.346057 899.118781 189.630407 899.118781c-47.359634 0-85.925998-38.581714-85.925998-86.037539L103.704408 339.466482c0-47.50392 38.566364-86.117356 85.925998-86.117356l60.406788 0c11.879562 0 21.473057 9.641591 21.473057 21.521153 0 11.927657-9.593496 21.537526-21.473057 21.537526l-60.406788 0c-23.680329 0-42.947138 19.298532-42.947138 43.058678L146.683269 813.081243c0 23.712051 19.266809 43.010583 42.947138 43.010583L834.346057 856.091826c23.663956 0 42.97886-19.298532 42.97886-43.010583L877.324918 339.466482c0-23.760147-19.314904-43.058678-42.97886-43.058678l-60.647265 0c-11.879562 0-21.505803-9.609869-21.505803-21.537526 0-11.879562 9.625218-21.521153 21.505803-21.521153l60.647265 0c47.40773 0 85.957721 38.613436 85.957721 86.117356L920.303778 813.081243C920.303778 860.537068 881.753787 899.118781 834.346057 899.118781L834.346057 899.118781zM662.190139 576.233953c-11.879562 0-21.473057-9.609869-21.473057-21.48943 0-71.103408-57.768705-128.936581-128.72885-128.936581-70.943772 0-128.72885 57.833173-128.72885 128.936581 0 71.088058 57.785078 128.936581 128.72885 128.936581 24.38334 0 48.334845-7.14677 69.2809-20.658506 10.008958-6.460132 23.248494-3.485381 29.692253 6.507204 6.412037 10.025331 3.501754 23.344684-6.443759 29.755698-27.933189 17.972327-59.911508 27.453259-92.529393 27.453259-94.703919 0-171.70771-77.148078-171.70771-171.995259 0-94.863555 77.003791-172.043355 171.70771-172.043355s171.70771 77.1798 171.70771 172.043355C683.695942 566.624085 674.070724 576.233953 662.190139 576.233953L662.190139 576.233953z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)