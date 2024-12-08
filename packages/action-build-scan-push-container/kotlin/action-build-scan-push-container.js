(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@docker/actions-toolkit', '@actions/core', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@docker/actions-toolkit'), require('@actions/core'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof actionsToolkit === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-scan-push-container'. Its dependency '@docker/actions-toolkit' was not found. Please, check whether '@docker/actions-toolkit' is loaded prior to 'kotlin.test.actions:action-build-scan-push-container'.");
    }
    if (typeof core === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-scan-push-container'. Its dependency '@actions/core' was not found. Please, check whether '@actions/core' is loaded prior to 'kotlin.test.actions:action-build-scan-push-container'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-scan-push-container'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin.test.actions:action-build-scan-push-container'.");
    }
    globalThis['kotlin.test.actions:action-build-scan-push-container'] = factory(typeof globalThis['kotlin.test.actions:action-build-scan-push-container'] === 'undefined' ? {} : globalThis['kotlin.test.actions:action-build-scan-push-container'], actionsToolkit, core, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, actionsToolkit, core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.a;
  var println = kotlin_kotlin.$_$.b;
  //endregion
  //region block: pre-declaration
  //endregion
  function main() {
    actionsToolkit.run(main$lambda);
    core.info('Seems to be doing something');
    println("We're hopefully happy");
    core.setFailed('We just fail right now');
  }
  function main$lambda() {
    return core.error('Testing this thing');
  }
  function mainWrapper() {
    main();
  }
  mainWrapper();
  return _;
}));

//# sourceMappingURL=action-build-scan-push-container.js.map
