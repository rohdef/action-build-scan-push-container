(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@actions/core', '@docker/actions-toolkit/lib/context', '@docker/actions-toolkit', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@actions/core'), require('@docker/actions-toolkit/lib/context'), require('@docker/actions-toolkit'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof core === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-scan-push-container'. Its dependency '@actions/core' was not found. Please, check whether '@actions/core' is loaded prior to 'kotlin.test.actions:action-build-scan-push-container'.");
    }
    if (typeof context === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-scan-push-container'. Its dependency '@docker/actions-toolkit/lib/context' was not found. Please, check whether '@docker/actions-toolkit/lib/context' is loaded prior to 'kotlin.test.actions:action-build-scan-push-container'.");
    }
    if (typeof actionsToolkit === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-scan-push-container'. Its dependency '@docker/actions-toolkit' was not found. Please, check whether '@docker/actions-toolkit' is loaded prior to 'kotlin.test.actions:action-build-scan-push-container'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-scan-push-container'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin.test.actions:action-build-scan-push-container'.");
    }
    globalThis['kotlin.test.actions:action-build-scan-push-container'] = factory(typeof globalThis['kotlin.test.actions:action-build-scan-push-container'] === 'undefined' ? {} : globalThis['kotlin.test.actions:action-build-scan-push-container'], core, context, actionsToolkit, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, core, context, actionsToolkit, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.e;
  var protoOf = kotlin_kotlin.$_$.h;
  var initMetadataForLambda = kotlin_kotlin.$_$.g;
  var VOID = kotlin_kotlin.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.i;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.f;
  var get_EmptyContinuation = kotlin_kotlin.$_$.d;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(main$slambda$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(main$slambda$slambda_1, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(main$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($mainCOROUTINE$0, CoroutineImpl);
  //endregion
  function main($completion) {
    var tmp = new $mainCOROUTINE$0($completion);
    tmp.s_1 = Unit_instance;
    tmp.t_1 = null;
    return tmp.k1();
  }
  function main$slambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda$slambda).t1 = function ($completion) {
    var tmp = this.u1($completion);
    tmp.s_1 = Unit_instance;
    tmp.t_1 = null;
    return tmp.k1();
  };
  protoOf(main$slambda$slambda).k1 = function () {
    var suspendResult = this.s_1;
    $sm: do
      try {
        var tmp = this.q_1;
        if (tmp === 0) {
          this.r_1 = 1;
          core.info('So this is fine');
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.t_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(main$slambda$slambda).u1 = function (completion) {
    return new main$slambda$slambda(completion);
  };
  function main$slambda$slambda_0(resultContinuation) {
    var i = new main$slambda$slambda(resultContinuation);
    var l = function ($completion) {
      return i.t1($completion);
    };
    l.$arity = 0;
    return l;
  }
  function main$slambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda$slambda_1).t1 = function ($completion) {
    var tmp = this.u1($completion);
    tmp.s_1 = Unit_instance;
    tmp.t_1 = null;
    return tmp.k1();
  };
  protoOf(main$slambda$slambda_1).k1 = function () {
    var suspendResult = this.s_1;
    $sm: do
      try {
        var tmp = this.q_1;
        if (tmp === 0) {
          this.r_1 = 1;
          core.info('And this is too');
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.t_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(main$slambda$slambda_1).u1 = function (completion) {
    return new main$slambda$slambda_1(completion);
  };
  function main$slambda$slambda_2(resultContinuation) {
    var i = new main$slambda$slambda_1(resultContinuation);
    var l = function ($completion) {
      return i.t1($completion);
    };
    l.$arity = 0;
    return l;
  }
  function main$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda).t1 = function ($completion) {
    var tmp = this.u1($completion);
    tmp.s_1 = Unit_instance;
    tmp.t_1 = null;
    return tmp.k1();
  };
  protoOf(main$slambda).k1 = function () {
    var suspendResult = this.s_1;
    $sm: do
      try {
        var tmp = this.q_1;
        switch (tmp) {
          case 0:
            this.r_1 = 4;
            this.l2_1 = new Date();
            this.q_1 = 1;
            suspendResult = context.getInputs(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m2_1 = suspendResult;
            core.info('We got inputs: ' + toString(this.m2_1));
            this.q_1 = 2;
            var tmp_0 = core;
            suspendResult = tmp_0.group('Dofus', main$slambda$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.q_1 = 3;
            var tmp_1 = core;
            suspendResult = tmp_1.group('Sofus', main$slambda$slambda_2(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            core.info("Ok, so we are running, let's see what we can do");
            return Unit_instance;
          case 4:
            throw this.t_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.r_1 === 4) {
          throw e;
        } else {
          this.q_1 = this.r_1;
          this.t_1 = e;
        }
      }
     while (true);
  };
  protoOf(main$slambda).u1 = function (completion) {
    return new main$slambda(completion);
  };
  function main$slambda_0(resultContinuation) {
    var i = new main$slambda(resultContinuation);
    var l = function ($completion) {
      return i.t1($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $mainCOROUTINE$0(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($mainCOROUTINE$0).k1 = function () {
    var suspendResult = this.s_1;
    $sm: do
      try {
        var tmp = this.q_1;
        switch (tmp) {
          case 0:
            this.r_1 = 2;
            this.q_1 = 1;
            var tmp_0 = actionsToolkit;
            suspendResult = tmp_0.run(main$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            core.info('Seems to be doing something');
            core.setFailed('We just fail right now');
            return Unit_instance;
          case 2:
            throw this.t_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.r_1 === 2) {
          throw e;
        } else {
          this.q_1 = this.r_1;
          this.t_1 = e;
        }
      }
     while (true);
  };
  function mainWrapper() {
    main(get_EmptyContinuation());
  }
  mainWrapper();
  return _;
}));

//# sourceMappingURL=action-build-scan-push-container.js.map
