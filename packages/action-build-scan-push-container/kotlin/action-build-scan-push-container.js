(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@docker/actions-toolkit/lib/toolkit', '@actions/core', '@docker/actions-toolkit/lib/github', '@docker/actions-toolkit/lib/docker/docker', '@docker/actions-toolkit', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@docker/actions-toolkit/lib/toolkit'), require('@actions/core'), require('@docker/actions-toolkit/lib/github'), require('@docker/actions-toolkit/lib/docker/docker'), require('@docker/actions-toolkit'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['@docker/actions-toolkit/lib/toolkit'] === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-scan-push-container'. Its dependency '@docker/actions-toolkit/lib/toolkit' was not found. Please, check whether '@docker/actions-toolkit/lib/toolkit' is loaded prior to 'kotlin.test.actions:action-build-scan-push-container'.");
    }
    if (typeof rawCore === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-scan-push-container'. Its dependency '@actions/core' was not found. Please, check whether '@actions/core' is loaded prior to 'kotlin.test.actions:action-build-scan-push-container'.");
    }
    if (typeof globalThis['@docker/actions-toolkit/lib/github'] === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-scan-push-container'. Its dependency '@docker/actions-toolkit/lib/github' was not found. Please, check whether '@docker/actions-toolkit/lib/github' is loaded prior to 'kotlin.test.actions:action-build-scan-push-container'.");
    }
    if (typeof globalThis['@docker/actions-toolkit/lib/docker/docker'] === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-scan-push-container'. Its dependency '@docker/actions-toolkit/lib/docker/docker' was not found. Please, check whether '@docker/actions-toolkit/lib/docker/docker' is loaded prior to 'kotlin.test.actions:action-build-scan-push-container'.");
    }
    if (typeof actionsToolkit === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-scan-push-container'. Its dependency '@docker/actions-toolkit' was not found. Please, check whether '@docker/actions-toolkit' is loaded prior to 'kotlin.test.actions:action-build-scan-push-container'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-scan-push-container'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin.test.actions:action-build-scan-push-container'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlin.test.actions:action-build-scan-push-container'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kotlin.test.actions:action-build-scan-push-container'.");
    }
    globalThis['kotlin.test.actions:action-build-scan-push-container'] = factory(typeof globalThis['kotlin.test.actions:action-build-scan-push-container'] === 'undefined' ? {} : globalThis['kotlin.test.actions:action-build-scan-push-container'], globalThis['@docker/actions-toolkit/lib/toolkit'], rawCore, globalThis['@docker/actions-toolkit/lib/github'], globalThis['@docker/actions-toolkit/lib/docker/docker'], actionsToolkit, globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, $module$_docker_actions_toolkit_lib_toolkit_ka14ts, rawCore, $module$_docker_actions_toolkit_lib_github_ycfdzl, $module$_docker_actions_toolkit_lib_docker_docker_pfs96p, actionsToolkit, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var Toolkit = $module$_docker_actions_toolkit_lib_toolkit_ka14ts.Toolkit;
  var GitHub = $module$_docker_actions_toolkit_lib_github_ycfdzl.GitHub;
  var Docker = $module$_docker_actions_toolkit_lib_docker_docker_pfs96p.Docker;
  var Unit_instance = kotlin_kotlin.$_$.y;
  var VOID = kotlin_kotlin.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.u1;
  var protoOf = kotlin_kotlin.$_$.h2;
  var THROW_CCE = kotlin_kotlin.$_$.o2;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.e1;
  var Exception = kotlin_kotlin.$_$.l2;
  var initMetadataForLambda = kotlin_kotlin.$_$.e2;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.k;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.c2;
  var get_EmptyContinuation = kotlin_kotlin.$_$.i1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var isInterface = kotlin_kotlin.$_$.g2;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var promise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var initMetadataForClass = kotlin_kotlin.$_$.b2;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(actionInfo$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(actionInfo$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(main$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($actionInfoCOROUTINE$0, CoroutineImpl);
  initMetadataForLambda(Core$run$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Core$run$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Core$group$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Core, 'Core', VOID, VOID, VOID, [2]);
  //endregion
  function actionInfo(_this__u8e3s4, $completion) {
    var tmp = new $actionInfoCOROUTINE$0(_this__u8e3s4, $completion);
    tmp.a4_1 = Unit_instance;
    tmp.b4_1 = null;
    return tmp.g4();
  }
  function main($completion) {
    var toolkit = new Toolkit();
    var tmp = new Core(rawCore);
    return tmp.th(main$slambda_0(toolkit, null), VOID, $completion);
  }
  function actionInfo$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(actionInfo$slambda).di = function ($this$group, $completion) {
    var tmp = this.ei($this$group, $completion);
    tmp.a4_1 = Unit_instance;
    tmp.b4_1 = null;
    return tmp.g4();
  };
  protoOf(actionInfo$slambda).q4 = function (p1, $completion) {
    return this.di(p1 instanceof Core ? p1 : THROW_CCE(), $completion);
  };
  protoOf(actionInfo$slambda).g4 = function () {
    var suspendResult = this.a4_1;
    $sm: do
      try {
        var tmp = this.y3_1;
        switch (tmp) {
          case 0:
            this.z3_1 = 3;
            this.z3_1 = 2;
            this.y3_1 = 1;
            suspendResult = await_0(GitHub.printActionsRuntimeTokenACs(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z3_1 = 3;
            this.y3_1 = 4;
            continue $sm;
          case 2:
            this.z3_1 = 3;
            var tmp_0 = this.b4_1;
            if (tmp_0 instanceof Exception) {
              var exception = this.b4_1;
              var tmp0_elvis_lhs = exception.message;
              this.ci_1.fi(tmp0_elvis_lhs == null ? 'Could not print token ACs' : tmp0_elvis_lhs);
              this.y3_1 = 4;
              continue $sm;
            } else {
              throw this.b4_1;
            }

          case 3:
            throw this.b4_1;
          case 4:
            this.z3_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.z3_1 === 3) {
          throw e;
        } else {
          this.y3_1 = this.z3_1;
          this.b4_1 = e;
        }
      }
     while (true);
  };
  protoOf(actionInfo$slambda).ei = function ($this$group, completion) {
    var i = new actionInfo$slambda(completion);
    i.ci_1 = $this$group;
    return i;
  };
  function actionInfo$slambda_0(resultContinuation) {
    var i = new actionInfo$slambda(resultContinuation);
    var l = function ($this$group, $completion) {
      return i.di($this$group, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function actionInfo$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(actionInfo$slambda_1).di = function ($this$group, $completion) {
    var tmp = this.ei($this$group, $completion);
    tmp.a4_1 = Unit_instance;
    tmp.b4_1 = null;
    return tmp.g4();
  };
  protoOf(actionInfo$slambda_1).q4 = function (p1, $completion) {
    return this.di(p1 instanceof Core ? p1 : THROW_CCE(), $completion);
  };
  protoOf(actionInfo$slambda_1).g4 = function () {
    var suspendResult = this.a4_1;
    $sm: do
      try {
        var tmp = this.y3_1;
        switch (tmp) {
          case 0:
            this.z3_1 = 4;
            this.z3_1 = 3;
            this.y3_1 = 1;
            suspendResult = await_0(Docker.printVersion(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.y3_1 = 2;
            suspendResult = await_0(Docker.printInfo(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.z3_1 = 4;
            this.y3_1 = 5;
            continue $sm;
          case 3:
            this.z3_1 = 4;
            var tmp_0 = this.b4_1;
            if (tmp_0 instanceof Exception) {
              var exception = this.b4_1;
              var tmp0_elvis_lhs = exception.message;
              this.oi_1.pi(tmp0_elvis_lhs == null ? 'Could not get docker information' : tmp0_elvis_lhs);
              this.y3_1 = 5;
              continue $sm;
            } else {
              throw this.b4_1;
            }

          case 4:
            throw this.b4_1;
          case 5:
            this.z3_1 = 4;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.z3_1 === 4) {
          throw e;
        } else {
          this.y3_1 = this.z3_1;
          this.b4_1 = e;
        }
      }
     while (true);
  };
  protoOf(actionInfo$slambda_1).ei = function ($this$group, completion) {
    var i = new actionInfo$slambda_1(completion);
    i.oi_1 = $this$group;
    return i;
  };
  function actionInfo$slambda_2(resultContinuation) {
    var i = new actionInfo$slambda_1(resultContinuation);
    var l = function ($this$group, $completion) {
      return i.di($this$group, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$slambda($toolkit, resultContinuation) {
    this.yi_1 = $toolkit;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda).di = function ($this$run, $completion) {
    var tmp = this.ei($this$run, $completion);
    tmp.a4_1 = Unit_instance;
    tmp.b4_1 = null;
    return tmp.g4();
  };
  protoOf(main$slambda).q4 = function (p1, $completion) {
    return this.di(p1 instanceof Core ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$slambda).g4 = function () {
    var suspendResult = this.a4_1;
    $sm: do
      try {
        var tmp = this.y3_1;
        switch (tmp) {
          case 0:
            this.z3_1 = 3;
            this.aj_1 = new Date();
            this.y3_1 = 1;
            suspendResult = await_0(this.yi_1.buildx.isAvailable(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.bj_1 = suspendResult;
            if (!this.bj_1) {
              throw Exception_init_$Create$('Docker buildx not found, cannot proceed');
            }

            this.y3_1 = 2;
            suspendResult = actionInfo(this.zi_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.zi_1.cj('We just fail right now');
            return Unit_instance;
          case 3:
            throw this.b4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z3_1 === 3) {
          throw e;
        } else {
          this.y3_1 = this.z3_1;
          this.b4_1 = e;
        }
      }
     while (true);
  };
  protoOf(main$slambda).ei = function ($this$run, completion) {
    var i = new main$slambda(this.yi_1, completion);
    i.zi_1 = $this$run;
    return i;
  };
  function main$slambda_0($toolkit, resultContinuation) {
    var i = new main$slambda($toolkit, resultContinuation);
    var l = function ($this$run, $completion) {
      return i.di($this$run, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $actionInfoCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rh_1 = _this__u8e3s4;
  }
  protoOf($actionInfoCOROUTINE$0).g4 = function () {
    var suspendResult = this.a4_1;
    $sm: do
      try {
        var tmp = this.y3_1;
        switch (tmp) {
          case 0:
            this.z3_1 = 3;
            this.y3_1 = 1;
            suspendResult = this.rh_1.dj('GitHub Actions runtime token ACs', actionInfo$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.y3_1 = 2;
            suspendResult = this.rh_1.dj('Docker info', actionInfo$slambda_2(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.b4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z3_1 === 3) {
          throw e;
        } else {
          this.y3_1 = this.z3_1;
          this.b4_1 = e;
        }
      }
     while (true);
  };
  function mainWrapper() {
    main(get_EmptyContinuation());
  }
  function Core$run$lambda$slambda($main, this$0, resultContinuation) {
    this.mj_1 = $main;
    this.nj_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$lambda$slambda).pj = function ($this$promise, $completion) {
    var tmp = this.qj($this$promise, $completion);
    tmp.a4_1 = Unit_instance;
    tmp.b4_1 = null;
    return tmp.g4();
  };
  protoOf(Core$run$lambda$slambda).q4 = function (p1, $completion) {
    return this.pj((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$run$lambda$slambda).g4 = function () {
    var suspendResult = this.a4_1;
    $sm: do
      try {
        var tmp = this.y3_1;
        switch (tmp) {
          case 0:
            this.z3_1 = 2;
            this.y3_1 = 1;
            suspendResult = this.mj_1(this.nj_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.b4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z3_1 === 2) {
          throw e;
        } else {
          this.y3_1 = this.z3_1;
          this.b4_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$run$lambda$slambda).qj = function ($this$promise, completion) {
    var i = new Core$run$lambda$slambda(this.mj_1, this.nj_1, completion);
    i.oj_1 = $this$promise;
    return i;
  };
  function Core$run$lambda$slambda_0($main, this$0, resultContinuation) {
    var i = new Core$run$lambda$slambda($main, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.pj($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Core$run$lambda($main, this$0) {
    return function () {
      var tmp = GlobalScope_instance;
      return promise(tmp, VOID, VOID, Core$run$lambda$slambda_0($main, this$0, null));
    };
  }
  function Core$run$slambda($it, this$0, resultContinuation) {
    this.zj_1 = $it;
    this.ak_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$slambda).pj = function ($this$promise, $completion) {
    var tmp = this.qj($this$promise, $completion);
    tmp.a4_1 = Unit_instance;
    tmp.b4_1 = null;
    return tmp.g4();
  };
  protoOf(Core$run$slambda).q4 = function (p1, $completion) {
    return this.pj((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$run$slambda).g4 = function () {
    var suspendResult = this.a4_1;
    $sm: do
      try {
        var tmp = this.y3_1;
        switch (tmp) {
          case 0:
            this.z3_1 = 2;
            this.y3_1 = 1;
            suspendResult = this.zj_1(this.ak_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.b4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z3_1 === 2) {
          throw e;
        } else {
          this.y3_1 = this.z3_1;
          this.b4_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$run$slambda).qj = function ($this$promise, completion) {
    var i = new Core$run$slambda(this.zj_1, this.ak_1, completion);
    i.bk_1 = $this$promise;
    return i;
  };
  function Core$run$slambda_0($it, this$0, resultContinuation) {
    var i = new Core$run$slambda($it, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.pj($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Core$run$lambda_0($it) {
    return function () {
      return $it;
    };
  }
  function Core$group$lambda$slambda($contents, this$0, resultContinuation) {
    this.kk_1 = $contents;
    this.lk_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$group$lambda$slambda).pj = function ($this$promise, $completion) {
    var tmp = this.qj($this$promise, $completion);
    tmp.a4_1 = Unit_instance;
    tmp.b4_1 = null;
    return tmp.g4();
  };
  protoOf(Core$group$lambda$slambda).q4 = function (p1, $completion) {
    return this.pj((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$group$lambda$slambda).g4 = function () {
    var suspendResult = this.a4_1;
    $sm: do
      try {
        var tmp = this.y3_1;
        switch (tmp) {
          case 0:
            this.z3_1 = 2;
            this.y3_1 = 1;
            suspendResult = this.kk_1(this.lk_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.b4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z3_1 === 2) {
          throw e;
        } else {
          this.y3_1 = this.z3_1;
          this.b4_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$group$lambda$slambda).qj = function ($this$promise, completion) {
    var i = new Core$group$lambda$slambda(this.kk_1, this.lk_1, completion);
    i.mk_1 = $this$promise;
    return i;
  };
  function Core$group$lambda$slambda_0($contents, this$0, resultContinuation) {
    var i = new Core$group$lambda$slambda($contents, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.pj($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Core$group$lambda($contents, this$0) {
    return function () {
      var tmp = GlobalScope_instance;
      return promise(tmp, VOID, VOID, Core$group$lambda$slambda_0($contents, this$0, null));
    };
  }
  function Core(rawCore) {
    this.sh_1 = rawCore;
  }
  protoOf(Core).nk = function (main, post, $completion) {
    var tmp = actionsToolkit;
    var tmp_0 = Core$run$lambda(main, this);
    var tmp_1;
    if (post == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Core.run.<anonymous>' call
      var tmp_2 = GlobalScope_instance;
      tmp_1 = promise(tmp_2, VOID, VOID, Core$run$slambda_0(post, this, null));
    }
    var tmp1_safe_receiver = tmp_1;
    var tmp_3;
    if (tmp1_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'dk.rohdef.actions.dk.rohdef.actions.github.Core.run.<anonymous>' call
      tmp_3 = Core$run$lambda_0(tmp1_safe_receiver);
    }
    return tmp.run(tmp_0, tmp_3, $completion);
  };
  protoOf(Core).th = function (main, post, $completion, $super) {
    post = post === VOID ? null : post;
    return $super === VOID ? this.nk(main, post, $completion) : $super.nk.call(this, main, post, $completion);
  };
  protoOf(Core).dj = function (name, contents, $completion) {
    return await_0(this.sh_1.group(name, Core$group$lambda(contents, this)), $completion);
  };
  protoOf(Core).cj = function (message) {
    return this.sh_1.setFailed(message);
  };
  protoOf(Core).pi = function (message) {
    return this.sh_1.info(message);
  };
  protoOf(Core).fi = function (message) {
    return this.sh_1.warning(message);
  };
  mainWrapper();
  return _;
}));

//# sourceMappingURL=action-build-scan-push-container.js.map
