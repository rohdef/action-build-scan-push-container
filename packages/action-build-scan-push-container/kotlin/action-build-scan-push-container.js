(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@docker/actions-toolkit/lib/github', '@actions/core', '@docker/actions-toolkit/lib/docker/docker', '@docker/actions-toolkit', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@docker/actions-toolkit/lib/github'), require('@actions/core'), require('@docker/actions-toolkit/lib/docker/docker'), require('@docker/actions-toolkit'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof github === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-scan-push-container'. Its dependency '@docker/actions-toolkit/lib/github' was not found. Please, check whether '@docker/actions-toolkit/lib/github' is loaded prior to 'kotlin.test.actions:action-build-scan-push-container'.");
    }
    if (typeof core === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-scan-push-container'. Its dependency '@actions/core' was not found. Please, check whether '@actions/core' is loaded prior to 'kotlin.test.actions:action-build-scan-push-container'.");
    }
    if (typeof docker === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-scan-push-container'. Its dependency '@docker/actions-toolkit/lib/docker/docker' was not found. Please, check whether '@docker/actions-toolkit/lib/docker/docker' is loaded prior to 'kotlin.test.actions:action-build-scan-push-container'.");
    }
    if (typeof actionsToolkit === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-scan-push-container'. Its dependency '@docker/actions-toolkit' was not found. Please, check whether '@docker/actions-toolkit' is loaded prior to 'kotlin.test.actions:action-build-scan-push-container'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-scan-push-container'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin.test.actions:action-build-scan-push-container'.");
    }
    globalThis['kotlin.test.actions:action-build-scan-push-container'] = factory(typeof globalThis['kotlin.test.actions:action-build-scan-push-container'] === 'undefined' ? {} : globalThis['kotlin.test.actions:action-build-scan-push-container'], github, core, docker, actionsToolkit, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, github, core, docker, actionsToolkit, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.e;
  var protoOf = kotlin_kotlin.$_$.h;
  var Exception = kotlin_kotlin.$_$.i;
  var initMetadataForLambda = kotlin_kotlin.$_$.g;
  var VOID = kotlin_kotlin.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.c;
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
    tmp.n_1 = Unit_instance;
    tmp.o_1 = null;
    return tmp.f1();
  }
  function main$slambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda$slambda).o1 = function ($completion) {
    var tmp = this.p1($completion);
    tmp.n_1 = Unit_instance;
    tmp.o_1 = null;
    return tmp.f1();
  };
  protoOf(main$slambda$slambda).f1 = function () {
    var suspendResult = this.n_1;
    $sm: do
      try {
        var tmp = this.l_1;
        if (tmp === 0) {
          this.m_1 = 1;
          try {
            github.GitHub.printActionsRuntimeTokenACs();
          } catch ($p) {
            if ($p instanceof Exception) {
              var exception = $p;
              core.warning(exception.message);
            } else {
              throw $p;
            }
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.o_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(main$slambda$slambda).p1 = function (completion) {
    return new main$slambda$slambda(completion);
  };
  function main$slambda$slambda_0(resultContinuation) {
    var i = new main$slambda$slambda(resultContinuation);
    var l = function ($completion) {
      return i.o1($completion);
    };
    l.$arity = 0;
    return l;
  }
  function main$slambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda$slambda_1).o1 = function ($completion) {
    var tmp = this.p1($completion);
    tmp.n_1 = Unit_instance;
    tmp.o_1 = null;
    return tmp.f1();
  };
  protoOf(main$slambda$slambda_1).f1 = function () {
    var suspendResult = this.n_1;
    $sm: do
      try {
        var tmp = this.l_1;
        if (tmp === 0) {
          this.m_1 = 1;
          try {
            docker.Docker.printVersion();
            docker.Docker.printInfo();
          } catch ($p) {
            if ($p instanceof Exception) {
              var exception = $p;
              core.info(exception.message);
            } else {
              throw $p;
            }
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.o_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(main$slambda$slambda_1).p1 = function (completion) {
    return new main$slambda$slambda_1(completion);
  };
  function main$slambda$slambda_2(resultContinuation) {
    var i = new main$slambda$slambda_1(resultContinuation);
    var l = function ($completion) {
      return i.o1($completion);
    };
    l.$arity = 0;
    return l;
  }
  function main$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda).o1 = function ($completion) {
    var tmp = this.p1($completion);
    tmp.n_1 = Unit_instance;
    tmp.o_1 = null;
    return tmp.f1();
  };
  protoOf(main$slambda).f1 = function () {
    var suspendResult = this.n_1;
    $sm: do
      try {
        var tmp = this.l_1;
        switch (tmp) {
          case 0:
            this.m_1 = 3;
            this.g2_1 = new Date();
            this.l_1 = 1;
            var tmp_0 = core;
            suspendResult = tmp_0.group('GitHub Actions runtime token ACs', main$slambda$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l_1 = 2;
            var tmp_1 = core;
            suspendResult = tmp_1.group('Docker info', main$slambda$slambda_2(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            core.info("Ok, so we are running, let's see what we can do");
            return Unit_instance;
          case 3:
            throw this.o_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m_1 === 3) {
          throw e;
        } else {
          this.l_1 = this.m_1;
          this.o_1 = e;
        }
      }
     while (true);
  };
  protoOf(main$slambda).p1 = function (completion) {
    return new main$slambda(completion);
  };
  function main$slambda_0(resultContinuation) {
    var i = new main$slambda(resultContinuation);
    var l = function ($completion) {
      return i.o1($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $mainCOROUTINE$0(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($mainCOROUTINE$0).f1 = function () {
    var suspendResult = this.n_1;
    $sm: do
      try {
        var tmp = this.l_1;
        switch (tmp) {
          case 0:
            this.m_1 = 2;
            this.l_1 = 1;
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
            throw this.o_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m_1 === 2) {
          throw e;
        } else {
          this.l_1 = this.m_1;
          this.o_1 = e;
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
