"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/copy-to-clipboard";
exports.ids = ["vendor-chunks/copy-to-clipboard"];
exports.modules = {

/***/ "(ssr)/./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar deselectCurrent = __webpack_require__(/*! toggle-selection */ \"(ssr)/./node_modules/toggle-selection/index.js\");\n\nvar clipboardToIE11Formatting = {\n  \"text/plain\": \"Text\",\n  \"text/html\": \"Url\",\n  \"default\": \"Text\"\n}\n\nvar defaultMessage = \"Copy to clipboard: #{key}, Enter\";\n\nfunction format(message) {\n  var copyKey = (/mac os x/i.test(navigator.userAgent) ? \"⌘\" : \"Ctrl\") + \"+C\";\n  return message.replace(/#{\\s*key\\s*}/g, copyKey);\n}\n\nfunction copy(text, options) {\n  var debug,\n    message,\n    reselectPrevious,\n    range,\n    selection,\n    mark,\n    success = false;\n  if (!options) {\n    options = {};\n  }\n  debug = options.debug || false;\n  try {\n    reselectPrevious = deselectCurrent();\n\n    range = document.createRange();\n    selection = document.getSelection();\n\n    mark = document.createElement(\"span\");\n    mark.textContent = text;\n    // avoid screen readers from reading out loud the text\n    mark.ariaHidden = \"true\"\n    // reset user styles for span element\n    mark.style.all = \"unset\";\n    // prevents scrolling to the end of the page\n    mark.style.position = \"fixed\";\n    mark.style.top = 0;\n    mark.style.clip = \"rect(0, 0, 0, 0)\";\n    // used to preserve spaces and line breaks\n    mark.style.whiteSpace = \"pre\";\n    // do not inherit user-select (it may be `none`)\n    mark.style.webkitUserSelect = \"text\";\n    mark.style.MozUserSelect = \"text\";\n    mark.style.msUserSelect = \"text\";\n    mark.style.userSelect = \"text\";\n    mark.addEventListener(\"copy\", function(e) {\n      e.stopPropagation();\n      if (options.format) {\n        e.preventDefault();\n        if (typeof e.clipboardData === \"undefined\") { // IE 11\n          debug && console.warn(\"unable to use e.clipboardData\");\n          debug && console.warn(\"trying IE specific stuff\");\n          window.clipboardData.clearData();\n          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting[\"default\"]\n          window.clipboardData.setData(format, text);\n        } else { // all other browsers\n          e.clipboardData.clearData();\n          e.clipboardData.setData(options.format, text);\n        }\n      }\n      if (options.onCopy) {\n        e.preventDefault();\n        options.onCopy(e.clipboardData);\n      }\n    });\n\n    document.body.appendChild(mark);\n\n    range.selectNodeContents(mark);\n    selection.addRange(range);\n\n    var successful = document.execCommand(\"copy\");\n    if (!successful) {\n      throw new Error(\"copy command was unsuccessful\");\n    }\n    success = true;\n  } catch (err) {\n    debug && console.error(\"unable to copy using execCommand: \", err);\n    debug && console.warn(\"trying IE specific stuff\");\n    try {\n      window.clipboardData.setData(options.format || \"text\", text);\n      options.onCopy && options.onCopy(window.clipboardData);\n      success = true;\n    } catch (err) {\n      debug && console.error(\"unable to copy using clipboardData: \", err);\n      debug && console.error(\"falling back to prompt\");\n      message = format(\"message\" in options ? options.message : defaultMessage);\n      window.prompt(message, text);\n    }\n  } finally {\n    if (selection) {\n      if (typeof selection.removeRange == \"function\") {\n        selection.removeRange(range);\n      } else {\n        selection.removeAllRanges();\n      }\n    }\n\n    if (mark) {\n      document.body.removeChild(mark);\n    }\n    reselectPrevious();\n  }\n\n  return success;\n}\n\nmodule.exports = copy;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29weS10by1jbGlwYm9hcmQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsc0JBQXNCLG1CQUFPLENBQUMsd0VBQWtCOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxJQUFJOztBQUUvQztBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhYnl5ZXAvLi9ub2RlX21vZHVsZXMvY29weS10by1jbGlwYm9hcmQvaW5kZXguanM/OGRkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIGRlc2VsZWN0Q3VycmVudCA9IHJlcXVpcmUoXCJ0b2dnbGUtc2VsZWN0aW9uXCIpO1xuXG52YXIgY2xpcGJvYXJkVG9JRTExRm9ybWF0dGluZyA9IHtcbiAgXCJ0ZXh0L3BsYWluXCI6IFwiVGV4dFwiLFxuICBcInRleHQvaHRtbFwiOiBcIlVybFwiLFxuICBcImRlZmF1bHRcIjogXCJUZXh0XCJcbn1cblxudmFyIGRlZmF1bHRNZXNzYWdlID0gXCJDb3B5IHRvIGNsaXBib2FyZDogI3trZXl9LCBFbnRlclwiO1xuXG5mdW5jdGlvbiBmb3JtYXQobWVzc2FnZSkge1xuICB2YXIgY29weUtleSA9ICgvbWFjIG9zIHgvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gXCLijJhcIiA6IFwiQ3RybFwiKSArIFwiK0NcIjtcbiAgcmV0dXJuIG1lc3NhZ2UucmVwbGFjZSgvI3tcXHMqa2V5XFxzKn0vZywgY29weUtleSk7XG59XG5cbmZ1bmN0aW9uIGNvcHkodGV4dCwgb3B0aW9ucykge1xuICB2YXIgZGVidWcsXG4gICAgbWVzc2FnZSxcbiAgICByZXNlbGVjdFByZXZpb3VzLFxuICAgIHJhbmdlLFxuICAgIHNlbGVjdGlvbixcbiAgICBtYXJrLFxuICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGRlYnVnID0gb3B0aW9ucy5kZWJ1ZyB8fCBmYWxzZTtcbiAgdHJ5IHtcbiAgICByZXNlbGVjdFByZXZpb3VzID0gZGVzZWxlY3RDdXJyZW50KCk7XG5cbiAgICByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICBtYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbWFyay50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgLy8gYXZvaWQgc2NyZWVuIHJlYWRlcnMgZnJvbSByZWFkaW5nIG91dCBsb3VkIHRoZSB0ZXh0XG4gICAgbWFyay5hcmlhSGlkZGVuID0gXCJ0cnVlXCJcbiAgICAvLyByZXNldCB1c2VyIHN0eWxlcyBmb3Igc3BhbiBlbGVtZW50XG4gICAgbWFyay5zdHlsZS5hbGwgPSBcInVuc2V0XCI7XG4gICAgLy8gcHJldmVudHMgc2Nyb2xsaW5nIHRvIHRoZSBlbmQgb2YgdGhlIHBhZ2VcbiAgICBtYXJrLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgIG1hcmsuc3R5bGUudG9wID0gMDtcbiAgICBtYXJrLnN0eWxlLmNsaXAgPSBcInJlY3QoMCwgMCwgMCwgMClcIjtcbiAgICAvLyB1c2VkIHRvIHByZXNlcnZlIHNwYWNlcyBhbmQgbGluZSBicmVha3NcbiAgICBtYXJrLnN0eWxlLndoaXRlU3BhY2UgPSBcInByZVwiO1xuICAgIC8vIGRvIG5vdCBpbmhlcml0IHVzZXItc2VsZWN0IChpdCBtYXkgYmUgYG5vbmVgKVxuICAgIG1hcmsuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9IFwidGV4dFwiO1xuICAgIG1hcmsuc3R5bGUuTW96VXNlclNlbGVjdCA9IFwidGV4dFwiO1xuICAgIG1hcmsuc3R5bGUubXNVc2VyU2VsZWN0ID0gXCJ0ZXh0XCI7XG4gICAgbWFyay5zdHlsZS51c2VyU2VsZWN0ID0gXCJ0ZXh0XCI7XG4gICAgbWFyay5hZGRFdmVudExpc3RlbmVyKFwiY29weVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKG9wdGlvbnMuZm9ybWF0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBlLmNsaXBib2FyZERhdGEgPT09IFwidW5kZWZpbmVkXCIpIHsgLy8gSUUgMTFcbiAgICAgICAgICBkZWJ1ZyAmJiBjb25zb2xlLndhcm4oXCJ1bmFibGUgdG8gdXNlIGUuY2xpcGJvYXJkRGF0YVwiKTtcbiAgICAgICAgICBkZWJ1ZyAmJiBjb25zb2xlLndhcm4oXCJ0cnlpbmcgSUUgc3BlY2lmaWMgc3R1ZmZcIik7XG4gICAgICAgICAgd2luZG93LmNsaXBib2FyZERhdGEuY2xlYXJEYXRhKCk7XG4gICAgICAgICAgdmFyIGZvcm1hdCA9IGNsaXBib2FyZFRvSUUxMUZvcm1hdHRpbmdbb3B0aW9ucy5mb3JtYXRdIHx8IGNsaXBib2FyZFRvSUUxMUZvcm1hdHRpbmdbXCJkZWZhdWx0XCJdXG4gICAgICAgICAgd2luZG93LmNsaXBib2FyZERhdGEuc2V0RGF0YShmb3JtYXQsIHRleHQpO1xuICAgICAgICB9IGVsc2UgeyAvLyBhbGwgb3RoZXIgYnJvd3NlcnNcbiAgICAgICAgICBlLmNsaXBib2FyZERhdGEuY2xlYXJEYXRhKCk7XG4gICAgICAgICAgZS5jbGlwYm9hcmREYXRhLnNldERhdGEob3B0aW9ucy5mb3JtYXQsIHRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5vbkNvcHkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvcHRpb25zLm9uQ29weShlLmNsaXBib2FyZERhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXJrKTtcblxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhtYXJrKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuXG4gICAgdmFyIHN1Y2Nlc3NmdWwgPSBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgaWYgKCFzdWNjZXNzZnVsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb3B5IGNvbW1hbmQgd2FzIHVuc3VjY2Vzc2Z1bFwiKTtcbiAgICB9XG4gICAgc3VjY2VzcyA9IHRydWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlYnVnICYmIGNvbnNvbGUuZXJyb3IoXCJ1bmFibGUgdG8gY29weSB1c2luZyBleGVjQ29tbWFuZDogXCIsIGVycik7XG4gICAgZGVidWcgJiYgY29uc29sZS53YXJuKFwidHJ5aW5nIElFIHNwZWNpZmljIHN0dWZmXCIpO1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuY2xpcGJvYXJkRGF0YS5zZXREYXRhKG9wdGlvbnMuZm9ybWF0IHx8IFwidGV4dFwiLCB0ZXh0KTtcbiAgICAgIG9wdGlvbnMub25Db3B5ICYmIG9wdGlvbnMub25Db3B5KHdpbmRvdy5jbGlwYm9hcmREYXRhKTtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZGVidWcgJiYgY29uc29sZS5lcnJvcihcInVuYWJsZSB0byBjb3B5IHVzaW5nIGNsaXBib2FyZERhdGE6IFwiLCBlcnIpO1xuICAgICAgZGVidWcgJiYgY29uc29sZS5lcnJvcihcImZhbGxpbmcgYmFjayB0byBwcm9tcHRcIik7XG4gICAgICBtZXNzYWdlID0gZm9ybWF0KFwibWVzc2FnZVwiIGluIG9wdGlvbnMgPyBvcHRpb25zLm1lc3NhZ2UgOiBkZWZhdWx0TWVzc2FnZSk7XG4gICAgICB3aW5kb3cucHJvbXB0KG1lc3NhZ2UsIHRleHQpO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdGlvbi5yZW1vdmVSYW5nZSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZVJhbmdlKHJhbmdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWFyaykge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtYXJrKTtcbiAgICB9XG4gICAgcmVzZWxlY3RQcmV2aW91cygpO1xuICB9XG5cbiAgcmV0dXJuIHN1Y2Nlc3M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/copy-to-clipboard/index.js\n");

/***/ })

};
;