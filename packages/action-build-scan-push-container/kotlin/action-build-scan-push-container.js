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
  var Unit_instance = kotlin_kotlin.$_$.b;
  var toString = kotlin_kotlin.$_$.f;
  var CoroutineImpl = kotlin_kotlin.$_$.c;
  var protoOf = kotlin_kotlin.$_$.e;
  var initMetadataForLambda = kotlin_kotlin.$_$.d;
  var VOID = kotlin_kotlin.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(main$lambda$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(main$lambda$slambda_1, CoroutineImpl, VOID, [0]);
  //endregion
  function main() {
    actionsToolkit.run(main$lambda);
    core.info('Seems to be doing something');
    core.setFailed('We just fail right now');
  }
  function main$lambda() {
    var startedTime = new Date();
    var inputs = core.getInputs();
    core.info('We got inputs: ' + toString(inputs));
    var tmp = core;
    tmp.group('Dofus', main$lambda$slambda_0(null));
    var tmp_0 = core;
    tmp_0.group('Sofus', main$lambda$slambda_2(null));
    return core.info("Ok, so we are running, let's see what we can do");
  }
  function main$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$lambda$slambda).u = function ($completion) {
    var tmp = this.v($completion);
    tmp.e_1 = Unit_instance;
    tmp.f_1 = null;
    return tmp.w();
  };
  protoOf(main$lambda$slambda).w = function () {
    var suspendResult = this.e_1;
    $sm: do
      try {
        var tmp = this.c_1;
        if (tmp === 0) {
          this.d_1 = 1;
          core.info('So this is fine');
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.f_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(main$lambda$slambda).v = function (completion) {
    return new main$lambda$slambda(completion);
  };
  function main$lambda$slambda_0(resultContinuation) {
    var i = new main$lambda$slambda(resultContinuation);
    var l = function ($completion) {
      return i.u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function main$lambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$lambda$slambda_1).u = function ($completion) {
    var tmp = this.v($completion);
    tmp.e_1 = Unit_instance;
    tmp.f_1 = null;
    return tmp.w();
  };
  protoOf(main$lambda$slambda_1).w = function () {
    var suspendResult = this.e_1;
    $sm: do
      try {
        var tmp = this.c_1;
        if (tmp === 0) {
          this.d_1 = 1;
          core.info('And this is too');
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.f_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(main$lambda$slambda_1).v = function (completion) {
    return new main$lambda$slambda_1(completion);
  };
  function main$lambda$slambda_2(resultContinuation) {
    var i = new main$lambda$slambda_1(resultContinuation);
    var l = function ($completion) {
      return i.u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function mainWrapper() {
    main();
  }
  mainWrapper();
  return _;
}));

//# sourceMappingURL=action-build-scan-push-container.js.map
