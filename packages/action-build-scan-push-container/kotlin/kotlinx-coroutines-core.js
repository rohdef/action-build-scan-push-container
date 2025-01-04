(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    globalThis['kotlinx-coroutines-core'] = factory(typeof globalThis['kotlinx-coroutines-core'] === 'undefined' ? {} : globalThis['kotlinx-coroutines-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.a1;
  var protoOf = kotlin_kotlin.$_$.n2;
  var THROW_CCE = kotlin_kotlin.$_$.a3;
  var Element = kotlin_kotlin.$_$.w1;
  var Continuation = kotlin_kotlin.$_$.s1;
  var initMetadataForClass = kotlin_kotlin.$_$.f2;
  var VOID = kotlin_kotlin.$_$.b;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.y;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.j1;
  var isInterface = kotlin_kotlin.$_$.m2;
  var toString = kotlin_kotlin.$_$.o2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o;
  var toString_0 = kotlin_kotlin.$_$.h3;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.i1;
  var initMetadataForInterface = kotlin_kotlin.$_$.i2;
  var initMetadataForObject = kotlin_kotlin.$_$.k2;
  var hashCode = kotlin_kotlin.$_$.e2;
  var equals = kotlin_kotlin.$_$.c2;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.i;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.v;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.w;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.o1;
  var Key_instance = kotlin_kotlin.$_$.x;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.n1;
  var get = kotlin_kotlin.$_$.p1;
  var minusKey = kotlin_kotlin.$_$.q1;
  var ContinuationInterceptor = kotlin_kotlin.$_$.r1;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.s;
  var addSuppressed = kotlin_kotlin.$_$.c3;
  var Enum = kotlin_kotlin.$_$.v2;
  var startCoroutine = kotlin_kotlin.$_$.z1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.f3;
  var Long = kotlin_kotlin.$_$.y2;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.c;
  var RuntimeException = kotlin_kotlin.$_$.z2;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.r;
  var captureStack = kotlin_kotlin.$_$.b2;
  var Error_0 = kotlin_kotlin.$_$.w2;
  var Error_init_$Init$ = kotlin_kotlin.$_$.l;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.k;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.g3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var CancellationException = kotlin_kotlin.$_$.h1;
  var ArrayList = kotlin_kotlin.$_$.b1;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var plus = kotlin_kotlin.$_$.x1;
  var get_0 = kotlin_kotlin.$_$.u1;
  var fold = kotlin_kotlin.$_$.t1;
  var minusKey_0 = kotlin_kotlin.$_$.v1;
  var anyToString = kotlin_kotlin.$_$.a2;
  var UnsupportedOperationException = kotlin_kotlin.$_$.b3;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.t;
  var Exception = kotlin_kotlin.$_$.x2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.n;
  var Companion_instance = kotlin_kotlin.$_$.z;
  var createFailure = kotlin_kotlin.$_$.d3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.u;
  var intercepted = kotlin_kotlin.$_$.k1;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.l1;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var removeFirstOrNull = kotlin_kotlin.$_$.g1;
  var KtList = kotlin_kotlin.$_$.d1;
  var Collection = kotlin_kotlin.$_$.c1;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.j;
  var ensureNotNull = kotlin_kotlin.$_$.e3;
  var getStringHashCode = kotlin_kotlin.$_$.d2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.f;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.q;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(ParentJob, 'ParentJob', VOID, VOID, [Element], [0]);
  initMetadataForClass(JobSupport, 'JobSupport', VOID, VOID, [Element, ParentJob], [0]);
  initMetadataForInterface(CoroutineScope, 'CoroutineScope');
  initMetadataForClass(AbstractCoroutine, 'AbstractCoroutine', VOID, JobSupport, [JobSupport, Element, Continuation, CoroutineScope], [0]);
  initMetadataForClass(DeferredCoroutine, 'DeferredCoroutine', VOID, AbstractCoroutine, [AbstractCoroutine, Element], [0]);
  initMetadataForClass(LazyDeferredCoroutine, 'LazyDeferredCoroutine', VOID, DeferredCoroutine, VOID, [0]);
  initMetadataForInterface(Runnable, 'Runnable');
  initMetadataForClass(SchedulerTask, 'SchedulerTask', VOID, VOID, [Runnable]);
  initMetadataForClass(DispatchedTask, 'DispatchedTask', VOID, SchedulerTask);
  initMetadataForClass(CancellableContinuationImpl, 'CancellableContinuationImpl', VOID, DispatchedTask, [DispatchedTask, Continuation]);
  initMetadataForInterface(NotCompleted, 'NotCompleted');
  initMetadataForInterface(CancelHandler, 'CancelHandler', VOID, VOID, [NotCompleted]);
  initMetadataForObject(Active, 'Active', VOID, VOID, [NotCompleted]);
  initMetadataForClass(CompletedContinuation, 'CompletedContinuation');
  initMetadataForClass(LockFreeLinkedListNode, 'LockFreeLinkedListNode', LockFreeLinkedListNode);
  initMetadataForInterface(Incomplete, 'Incomplete');
  initMetadataForClass(JobNode, 'JobNode', VOID, LockFreeLinkedListNode, [LockFreeLinkedListNode, Incomplete]);
  initMetadataForClass(ChildContinuation, 'ChildContinuation', VOID, JobNode);
  initMetadataForClass(CompletedExceptionally, 'CompletedExceptionally');
  initMetadataForClass(CancelledContinuation, 'CancelledContinuation', VOID, CompletedExceptionally);
  initMetadataForObject(Key, 'Key', VOID, AbstractCoroutineContextKey);
  initMetadataForClass(CoroutineDispatcher, 'CoroutineDispatcher', VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  initMetadataForObject(Key_0, 'Key');
  initMetadataForObject(GlobalScope, 'GlobalScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(CoroutineStart, 'CoroutineStart', VOID, Enum);
  initMetadataForClass(EventLoop, 'EventLoop', VOID, CoroutineDispatcher);
  initMetadataForObject(ThreadLocalEventLoop, 'ThreadLocalEventLoop');
  initMetadataForClass(CompletionHandlerException, 'CompletionHandlerException', VOID, RuntimeException);
  initMetadataForClass(CoroutinesInternalError, 'CoroutinesInternalError', VOID, Error_0);
  initMetadataForObject(Key_1, 'Key');
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle');
  initMetadataForClass(Empty, 'Empty', VOID, VOID, [Incomplete]);
  initMetadataForClass(LockFreeLinkedListHead, 'LockFreeLinkedListHead', LockFreeLinkedListHead, LockFreeLinkedListNode);
  initMetadataForClass(NodeList, 'NodeList', NodeList, LockFreeLinkedListHead, [LockFreeLinkedListHead, Incomplete]);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(Finishing, 'Finishing', VOID, SynchronizedObject, [SynchronizedObject, Incomplete]);
  initMetadataForClass(ChildCompletion, 'ChildCompletion', VOID, JobNode);
  initMetadataForClass(InactiveNodeList, 'InactiveNodeList', VOID, VOID, [Incomplete]);
  initMetadataForClass(InvokeOnCompletion, 'InvokeOnCompletion', VOID, JobNode);
  initMetadataForClass(InvokeOnCancelling, 'InvokeOnCancelling', VOID, JobNode);
  initMetadataForClass(ChildHandleNode, 'ChildHandleNode', VOID, JobNode);
  initMetadataForClass(IncompleteStateBox, 'IncompleteStateBox');
  initMetadataForClass(MainCoroutineDispatcher, 'MainCoroutineDispatcher', VOID, CoroutineDispatcher);
  initMetadataForClass(TimeoutCancellationException, 'TimeoutCancellationException', VOID, CancellationException);
  initMetadataForObject(Unconfined, 'Unconfined', VOID, CoroutineDispatcher);
  initMetadataForObject(Key_2, 'Key');
  initMetadataForClass(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode');
  initMetadataForClass(Segment, 'Segment', VOID, ConcurrentLinkedListNode, [ConcurrentLinkedListNode, NotCompleted]);
  initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
  initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [DispatchedTask, Continuation]);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForClass(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', VOID, CoroutineDispatcher, VOID, [1]);
  initMetadataForObject(NodeDispatcher, 'NodeDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(MessageQueue, 'MessageQueue', VOID, VOID, [KtList, Collection]);
  initMetadataForClass(ScheduledMessageQueue, 'ScheduledMessageQueue', VOID, MessageQueue);
  initMetadataForClass(WindowMessageQueue, 'WindowMessageQueue', VOID, MessageQueue);
  initMetadataForClass(UnconfinedEventLoop, 'UnconfinedEventLoop', UnconfinedEventLoop, EventLoop);
  initMetadataForObject(SetTimeoutDispatcher, 'SetTimeoutDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(WindowDispatcher, 'WindowDispatcher', VOID, CoroutineDispatcher, VOID, [1]);
  initMetadataForObject(Dispatchers, 'Dispatchers');
  initMetadataForClass(JsMainDispatcher, 'JsMainDispatcher', VOID, MainCoroutineDispatcher);
  initMetadataForClass(JobCancellationException, 'JobCancellationException', VOID, CancellationException);
  initMetadataForClass(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', VOID, RuntimeException);
  initMetadataForClass(ListClosed, 'ListClosed', VOID, LockFreeLinkedListNode);
  initMetadataForClass(CommonThreadLocal, 'CommonThreadLocal', CommonThreadLocal);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.na(parentContext.p5(Key_instance_2));
    }
    this.qa_1 = parentContext.r8(this);
  }
  protoOf(AbstractCoroutine).i5 = function () {
    return this.qa_1;
  };
  protoOf(AbstractCoroutine).ra = function () {
    return this.qa_1;
  };
  protoOf(AbstractCoroutine).sa = function () {
    return protoOf(JobSupport).sa.call(this);
  };
  protoOf(AbstractCoroutine).ta = function (value) {
  };
  protoOf(AbstractCoroutine).ua = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).va = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).wa = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.ua(state.xa_1, state.za());
    } else {
      this.ta((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).n5 = function (result) {
    var state = this.ab(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.bb(state);
  };
  protoOf(AbstractCoroutine).bb = function (state) {
    return this.cb(state);
  };
  protoOf(AbstractCoroutine).db = function (exception) {
    handleCoroutineException(this.qa_1, exception);
  };
  protoOf(AbstractCoroutine).eb = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.qa_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).eb.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).eb.call(this);
  };
  protoOf(AbstractCoroutine).fb = function (start, receiver, block) {
    start.ib(block, receiver, this);
  };
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.jc() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.fb(start, coroutine, block);
    return coroutine;
  }
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).nc = function () {
    var tmp = this.ic();
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.rc_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).ob = function () {
    startCoroutineCancellable_0(this.rc_1, this);
  };
  function _get_parentHandle__f8dcex($this) {
    return $this.xc_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp5_subject = $this.lb();
    var tmp;
    if (!(tmp5_subject == null) ? isInterface(tmp5_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp5_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.fd_1)) {
      var tmp_0 = $this.tc_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).ed();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.tc_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.gd(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.vc_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    if (!!(index === 536870911)) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      segment.hd(index, cause, $this.i5());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.i5(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.vc_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (1 << 29) + (cur & 536870911) | 0;
          if ($this.vc_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.vc_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (2 << 29) + (cur & 536870911) | 0;
          if ($this.vc_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.i5().p5(Key_instance_2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var handle = invokeOnCompletion(parent, VOID, new ChildContinuation($this));
    $this.xc_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_instance;
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) && idempotent == null) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          tmp_1 = isInterface(state, CancelHandler);
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, isInterface(state, CancelHandler) ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.id();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.tc_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.uc_1 = this.tc_1.i5();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$0 = (0 << 29) + 536870911 | 0;
    tmp.vc_1 = atomic$int$1(tmp$ret$0);
    this.wc_1 = atomic$ref$1(Active_instance);
    this.xc_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).jd = function () {
    return this.tc_1;
  };
  protoOf(CancellableContinuationImpl).i5 = function () {
    return this.uc_1;
  };
  protoOf(CancellableContinuationImpl).lb = function () {
    return this.wc_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).mb = function () {
    var tmp = this.lb();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).kd = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.mb()) {
      handle.ld();
      this.xc_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).md = function () {
    return this.lb();
  };
  protoOf(CancellableContinuationImpl).nd = function (takenState, cause) {
    var this_0 = this.wc_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_instance;
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            if (!!state.td()) {
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.ud(VOID, VOID, VOID, VOID, cause);
            if (this.wc_1.atomicfu$compareAndSet(state, update)) {
              state.vd(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.wc_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).wd = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.wc_1;
    while (true) {
      var tmp1 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        if (!(!(tmp1 == null) ? isInterface(tmp1, NotCompleted) : false))
          return false;
        var tmp;
        if (isInterface(tmp1, CancelHandler)) {
          tmp = true;
        } else {
          tmp = tmp1 instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this.wc_1.atomicfu$compareAndSet(tmp1, update)) {
          break $l$block;
        }
        if (isInterface(tmp1, CancelHandler)) {
          this.xd(tmp1, cause);
        } else {
          if (tmp1 instanceof Segment) {
            callSegmentOnCancellation(this, tmp1, cause);
          }
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.fd_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).yd = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.wd(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).xd = function (handler, cause) {
    var tmp;
    try {
      handler.zd(cause);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.i5(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this.toString(), ex));
        tmp_0 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).ae = function (onCancellation, cause, value) {
    try {
      onCancellation(cause, value, this.i5());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.i5(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).be = function (parent) {
    return parent.pb();
  };
  protoOf(CancellableContinuationImpl).ce = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.de();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.de();
    }
    var state = this.lb();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.xa_1, this);
    if (get_isCancellableMode(this.fd_1)) {
      var job = this.i5().p5(Key_instance_2);
      if (!(job == null) && !job.sa()) {
        var cause = job.pb();
        this.nd(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.ee(state);
  };
  protoOf(CancellableContinuationImpl).de = function () {
    var tmp = this.tc_1;
    var tmp10_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp0_elvis_lhs = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.fe(this);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.id();
    this.wd(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).n5 = function (result) {
    return this.ge(toState(result, this), this.fd_1);
  };
  protoOf(CancellableContinuationImpl).he = function (proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.wc_1;
    while (true) {
      var tmp1 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        if (!(tmp1 == null) ? isInterface(tmp1, NotCompleted) : false) {
          var update = resumedState(this, tmp1, proposedUpdate, resumeMode, onCancellation, null);
          if (!this.wc_1.atomicfu$compareAndSet(tmp1, update)) {
            break $l$block;
          }
          detachChildIfNonResuable(this);
          dispatchResume(this, resumeMode);
          return Unit_instance;
        } else {
          if (tmp1 instanceof CancelledContinuation) {
            if (tmp1.le()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>.<anonymous>' call
                this.ae(onCancellation, tmp1.xa_1, proposedUpdate);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError(this, proposedUpdate);
      }
    }
  };
  protoOf(CancellableContinuationImpl).ge = function (proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    if ($super === VOID) {
      this.he(proposedUpdate, resumeMode, onCancellation);
      tmp = Unit_instance;
    } else {
      tmp = $super.he.call(this, proposedUpdate, resumeMode, onCancellation);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).id = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.ld();
    this.xc_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).ee = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.od_1;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : !(state == null)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).me = function (state) {
    var tmp20_safe_receiver = protoOf(DispatchedTask).me.call(this, state);
    var tmp;
    if (tmp20_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp = recoverStackTrace(tmp20_safe_receiver, this.tc_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.ne() + '(' + toDebugString(this.tc_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).ne = function () {
    return 'CancellableContinuation';
  };
  function NotCompleted() {
  }
  function CancelHandler() {
  }
  function Active() {
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    return Active_instance;
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.od_1 = result;
    this.pd_1 = cancelHandler;
    this.qd_1 = onCancellation;
    this.rd_1 = idempotentResume;
    this.sd_1 = cancelCause;
  }
  protoOf(CompletedContinuation).td = function () {
    return !(this.sd_1 == null);
  };
  protoOf(CompletedContinuation).vd = function (cont, cause) {
    var tmp21_safe_receiver = this.pd_1;
    if (tmp21_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.CompletedContinuation.invokeHandlers.<anonymous>' call
      cont.xd(tmp21_safe_receiver, cause);
    }
    var tmp22_safe_receiver = this.qd_1;
    if (tmp22_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.CompletedContinuation.invokeHandlers.<anonymous>' call
      cont.ae(tmp22_safe_receiver, cause, this.od_1);
    }
  };
  protoOf(CompletedContinuation).qe = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).ud = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.od_1 : result;
    cancelHandler = cancelHandler === VOID ? this.pd_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.qd_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.rd_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.sd_1 : cancelCause;
    return $super === VOID ? this.qe(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.qe.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.od_1) + ', cancelHandler=' + toString_0(this.pd_1) + ', onCancellation=' + toString_0(this.qd_1) + ', idempotentResume=' + toString_0(this.rd_1) + ', cancelCause=' + toString_0(this.sd_1) + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.od_1 == null ? 0 : hashCode(this.od_1);
    result = imul(result, 31) + (this.pd_1 == null ? 0 : hashCode(this.pd_1)) | 0;
    result = imul(result, 31) + (this.qd_1 == null ? 0 : hashCode(this.qd_1)) | 0;
    result = imul(result, 31) + (this.rd_1 == null ? 0 : hashCode(this.rd_1)) | 0;
    result = imul(result, 31) + (this.sd_1 == null ? 0 : hashCode(this.sd_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.od_1, tmp0_other_with_cast.od_1))
      return false;
    if (!equals(this.pd_1, tmp0_other_with_cast.pd_1))
      return false;
    if (!equals(this.qd_1, tmp0_other_with_cast.qd_1))
      return false;
    if (!equals(this.rd_1, tmp0_other_with_cast.rd_1))
      return false;
    if (!equals(this.sd_1, tmp0_other_with_cast.sd_1))
      return false;
    return true;
  };
  function ChildContinuation(child) {
    JobNode.call(this);
    this.ve_1 = child;
  }
  protoOf(ChildContinuation).we = function () {
    return true;
  };
  protoOf(ChildContinuation).zd = function (cause) {
    this.ve_1.yd(this.ve_1.be(this.bf()));
  };
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.xa_1 = cause;
    this.ya_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).za = function () {
    return this.ya_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).jf = function () {
    return this.ya_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.xa_1.toString() + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + toString(continuation) + ' was cancelled normally') : cause, handled);
    this.ke_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).le = function () {
    return this.ke_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.getOrElse' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4) {
    // Inline function 'kotlin.getOrElse' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance_0 = this;
    var tmp = Key_instance;
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance() {
    if (Key_instance_0 == null)
      new Key();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance();
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(CoroutineDispatcher).lf = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).q5 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).r5 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.nf();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp23_safe_receiver = context.p5(Key_instance_1);
      if (tmp23_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        tmp23_safe_receiver.of(context, exception);
        return Unit_instance;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(exception, t));
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, exception);
  }
  function Key_0() {
  }
  var Key_instance_1;
  function Key_getInstance_0() {
    return Key_instance_1;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    var this_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    addSuppressed(this_0, originalException);
    return this_0;
  }
  function CoroutineScope() {
  }
  function GlobalScope() {
  }
  protoOf(GlobalScope).ra = function () {
    return EmptyCoroutineContext_getInstance();
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    return GlobalScope_instance;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_instance;
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).ib = function (block, receiver, completion) {
    var tmp;
    switch (this.a1_1) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).jc = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.qf_1 = new Long(0, 0);
    this.rf_1 = false;
    this.sf_1 = null;
  }
  protoOf(EventLoop).tf = function () {
    var tmp0_elvis_lhs = this.sf_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.e8();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.oe();
    return true;
  };
  protoOf(EventLoop).uf = function (task) {
    var tmp0_elvis_lhs = this.sf_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.sf_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.c8(task);
  };
  protoOf(EventLoop).vf = function () {
    return this.qf_1.h1(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).wf = function () {
    var tmp27_safe_receiver = this.sf_1;
    var tmp0_elvis_lhs = tmp27_safe_receiver == null ? null : tmp27_safe_receiver.q();
    return tmp0_elvis_lhs == null ? true : tmp0_elvis_lhs;
  };
  protoOf(EventLoop).xf = function (unconfined) {
    this.qf_1 = this.qf_1.i1(delta(this, unconfined));
    if (!unconfined)
      this.rf_1 = true;
  };
  protoOf(EventLoop).yf = function (unconfined) {
    this.qf_1 = this.qf_1.j1(delta(this, unconfined));
    if (this.qf_1.h1(new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.rf_1) {
      this.zf();
    }
  };
  protoOf(EventLoop).zf = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.ag_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).bg = function () {
    var tmp0_elvis_lhs = this.ag_1.dg();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().ag_1.eg(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function ParentJob() {
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).ld = function () {
  };
  protoOf(NonDisposableHandle).yb = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function invokeOnCompletion(_this__u8e3s4, invokeImmediately, handler) {
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    var tmp;
    if (_this__u8e3s4 instanceof JobSupport) {
      tmp = _this__u8e3s4.ub(invokeImmediately, handler);
    } else {
      var tmp_0 = handler.we();
      tmp = _this__u8e3s4.tb(tmp_0, invokeImmediately, JobNode$invoke$ref(handler));
    }
    return tmp;
  }
  function JobNode$invoke$ref($boundThis) {
    var l = function (p0) {
      $boundThis.zd(p0);
      return Unit_instance;
    };
    l.callableName = 'invoke';
    return l;
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.fg_1 = isActive;
  }
  protoOf(Empty).sa = function () {
    return this.fg_1;
  };
  protoOf(Empty).cf = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.fg_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LockFreeLinkedListHead.call(this);
  }
  protoOf(NodeList).sa = function () {
    return true;
  };
  protoOf(NodeList).cf = function () {
    return this;
  };
  protoOf(NodeList).jg = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    this_0.x4('List{');
    this_0.x4(state);
    this_0.x4('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = this.df_1;
    while (!equals(cur, this)) {
      // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
      var node = cur;
      if (node instanceof JobNode) {
        if (first) {
          first = false;
        } else
          this_0.x4(', ');
        this_0.w4(node);
      }
      cur = cur.df_1;
    }
    this_0.x4(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.jg('Active') : protoOf(LockFreeLinkedListHead).toString.call(this);
  };
  function JobNode() {
    LockFreeLinkedListNode.call(this);
  }
  protoOf(JobNode).bf = function () {
    var tmp = this.af_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).sa = function () {
    return true;
  };
  protoOf(JobNode).cf = function () {
    return null;
  };
  protoOf(JobNode).ld = function () {
    return this.bf().vb(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.bf()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.og_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.og_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp46_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp46_safe_receiver == null ? null : tmp46_safe_receiver.xa_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.pg();
    var exceptions = state.qg(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.fc(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).jf();
      }
    }
    if (!wasCancelling) {
      $this.cc(finalException);
    }
    $this.wa(finalState);
    var casSuccess = $this.la_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.q()) {
      if (state.pg()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.va() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = exceptions.e();
      while (_iterator__ex2g4s.f()) {
        var element = _iterator__ex2g4s.g();
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.i(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = exceptions.e();
        while (_iterator__ex2g4s_0.f()) {
          var element_0 = _iterator__ex2g4s_0.g();
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.h() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.h());
    var unwrappedCause = unwrap(rootCause);
    var _iterator__ex2g4s = exceptions.e();
    while (_iterator__ex2g4s.f()) {
      var exception = _iterator__ex2g4s.g();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) && !(unwrapped === unwrappedCause)) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.o(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        addSuppressed(rootCause, unwrapped);
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.la_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.cc(null);
    $this.wa(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp47_safe_receiver = $this.kb();
    if (tmp47_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.completeStateFinalization.<anonymous>' call
      tmp47_safe_receiver.ld();
      $this.jb(NonDisposableHandle_instance);
    }
    var tmp48_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp48_safe_receiver == null ? null : tmp48_safe_receiver.xa_1;
    if (state instanceof JobNode) {
      try {
        state.zd(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.db(new CompletionHandlerException('Exception in completion handler ' + state.toString() + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp49_safe_receiver = state.cf();
      if (tmp49_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp49_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.cc(cause);
    list.kg(4);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = list.df_1;
    while (!equals(cur, list)) {
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyCancelling.<anonymous>' call
        tmp = node.we();
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.zd(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp50_safe_receiver = exception;
            var tmp_0;
            if (tmp50_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              addSuppressed(tmp50_safe_receiver, ex);
              tmp_0 = tmp50_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.df_1;
    }
    var tmp51_safe_receiver = exception;
    if (tmp51_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      $this.db(tmp51_safe_receiver);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.dc())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.kb();
    if (parent === null || parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.yb(cause) || isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    _this__u8e3s4.kg(1);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = _this__u8e3s4.df_1;
    while (!equals(cur, _this__u8e3s4)) {
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyCompletion.<anonymous>' call
        tmp = true;
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.zd(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp50_safe_receiver = exception;
            var tmp_0;
            if (tmp50_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              addSuppressed(tmp50_safe_receiver, ex);
              tmp_0 = tmp50_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.df_1;
    }
    var tmp51_safe_receiver = exception;
    if (tmp51_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      $this.db(tmp51_safe_receiver);
    }
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.fg_1)
        return 0;
      if (!$this.la_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.ob();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.la_1.atomicfu$compareAndSet(state, state.rg_1))
          return -1;
        $this.ob();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.fg_1 ? list : new InactiveNodeList(list);
    $this.la_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.if(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
    var list = state.df_1;
    $this.la_1.atomicfu$compareAndSet(state, list);
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var state = $this.lb();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.sg();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.va() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).ac();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = $this.lb();
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        if (tmp1 instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp1.tg())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp1.pg();
          if (!(cause == null) || !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp1.ug(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = tmp1.vg();
          var tmp_0;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
            notifyCancelling($this, tmp1.lg_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp1 == null) ? isInterface(tmp1, Incomplete) : false) {
            var tmp0_elvis_lhs_0 = causeExceptionCache;
            var tmp_1;
            if (tmp0_elvis_lhs_0 == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp0_elvis_lhs_0;
            }
            var causeException_0 = tmp_1;
            if (tmp1.sa()) {
              if (tryMakeCancelling($this, tmp1, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp1, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString(tmp1);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp0_elvis_lhs = state.cf();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var message = 'State should have list: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.la_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.sg())
      return get_COMPLETING_ALREADY();
    finishing.wg(true);
    if (!(finishing === state)) {
      if (!$this.la_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.pg();
    var tmp65_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp65_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
      finishing.ug(tmp65_safe_receiver.xa_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.vg();
    var tmp_0;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    if (notifyRootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>' call
      notifyCancelling($this, list, notifyRootCause);
    }
    var child = nextChild(list, $this);
    if (!(child == null) && tryWaitForChild($this, finishing, child, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    list.kg(2);
    var anotherChild = nextChild(list, $this);
    if (!(anotherChild == null) && tryWaitForChild($this, finishing, anotherChild, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp67_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp67_safe_receiver == null ? null : tmp67_safe_receiver.xa_1;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var handle = invokeOnCompletion(child_0.bh_1, false, new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0));
        if (!(handle === NonDisposableHandle_instance))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = nextChild_0;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) && tryWaitForChild($this, state, waitChild, proposedUpdate))
      return Unit_instance;
    state.lg_1.kg(2);
    var waitChildAgain = nextChild(lastChild, $this);
    if (!(waitChildAgain == null) && tryWaitForChild($this, state, waitChildAgain, proposedUpdate)) {
      return Unit_instance;
    }
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.cb(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (!cur.ff_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.prevNode' call
      cur = cur.ef_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
      cur = cur.df_1;
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (cur.ff_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.pg() ? 'Cancelling' : state.sg() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.sa() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    SynchronizedObject.call(this);
    this.lg_1 = list;
    this.mg_1 = atomic$boolean$1(isCompleting);
    this.ng_1 = atomic$ref$1(rootCause);
    this.og_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).cf = function () {
    return this.lg_1;
  };
  protoOf(Finishing).wg = function (value) {
    this.mg_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).sg = function () {
    return this.mg_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).ch = function (value) {
    this.ng_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).vg = function () {
    return this.ng_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).tg = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).pg = function () {
    return !(this.vg() == null);
  };
  protoOf(Finishing).sa = function () {
    return this.vg() == null;
  };
  protoOf(Finishing).qg = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        this_0.o(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.vg();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
      list.y1(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.o(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).ug = function (exception) {
    var rootCause = this.vg();
    if (rootCause == null) {
      this.ch(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        this_0.o(eh);
        this_0.o(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).o(exception);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.pg() + ', completing=' + this.sg() + ', rootCause=' + toString_0(this.vg()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.lg_1.toString() + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.hh_1 = parent;
    this.ih_1 = state;
    this.jh_1 = child;
    this.kh_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).we = function () {
    return false;
  };
  protoOf(ChildCompletion).zd = function (cause) {
    continueCompleting(this.hh_1, this.ih_1, this.jh_1, this.kh_1);
  };
  function JobSupport(active) {
    this.la_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.ma_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).t = function () {
    return Key_instance_2;
  };
  protoOf(JobSupport).jb = function (value) {
    this.ma_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).kb = function () {
    return this.ma_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).na = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.jb(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.nb();
    var handle = parent.bc(this);
    this.jb(handle);
    if (this.mb()) {
      handle.ld();
      this.jb(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).lb = function () {
    return this.la_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).sa = function () {
    var state = this.lb();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.sa();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).mb = function () {
    var tmp = this.lb();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).nb = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var state = this.lb();
      var tmp52_subject = startInternal(this, state);
      if (tmp52_subject === 0)
        return false;
      else if (tmp52_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).ob = function () {
  };
  protoOf(JobSupport).pb = function () {
    var state = this.lb();
    var tmp;
    if (state instanceof Finishing) {
      var tmp54_safe_receiver = state.vg();
      var tmp0_elvis_lhs = tmp54_safe_receiver == null ? null : this.qb(tmp54_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.rb(state.xa_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).qb = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.va() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).rb = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.qb(_this__u8e3s4, message) : $super.qb.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).sb = function (handler) {
    return this.ub(true, new InvokeOnCompletion(handler));
  };
  protoOf(JobSupport).tb = function (onCancelling, invokeImmediately, handler) {
    var tmp;
    if (onCancelling) {
      tmp = new InvokeOnCancelling(handler);
    } else {
      tmp = new InvokeOnCompletion(handler);
    }
    return this.ub(invokeImmediately, tmp);
  };
  protoOf(JobSupport).ub = function (invokeImmediately, node) {
    node.af_1 = this;
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList.<anonymous>' call
        var state = this.lb();
        if (state instanceof Empty) {
          if (state.fg_1) {
            if (this.la_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$0 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.cf();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletionInternal.<anonymous>' call
              var tmp;
              if (node.we()) {
                var tmp55_safe_receiver = state instanceof Finishing ? state : null;
                var rootCause = tmp55_safe_receiver == null ? null : tmp55_safe_receiver.vg();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = list.gf(node, 5);
                } else {
                  if (invokeImmediately) {
                    node.zd(rootCause);
                  }
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_0;
              } else {
                tmp = list.gf(node, 1);
              }
              if (tmp) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$0 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$0;
    if (added)
      return node;
    else if (invokeImmediately) {
      var tmp_1 = this.lb();
      var tmp56_safe_receiver = tmp_1 instanceof CompletedExceptionally ? tmp_1 : null;
      node.zd(tmp56_safe_receiver == null ? null : tmp56_safe_receiver.xa_1);
    }
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).vb = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var state = this.lb();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.la_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.cf() == null)) {
            node.hf();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).wb = function () {
    return false;
  };
  protoOf(JobSupport).va = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).xb = function (parentJob) {
    this.zb(parentJob);
  };
  protoOf(JobSupport).yb = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.zb(cause) && this.ec();
  };
  protoOf(JobSupport).zb = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.wb()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.cb(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).ac = function () {
    var state = this.lb();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.vg();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.xa_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var message = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp0_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp0_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp0_elvis_lhs;
  };
  protoOf(JobSupport).ab = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = this.lb();
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var finalState = tryMakeCompleting(this, tmp1, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this.toString() + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).bc = function (child) {
    // Inline function 'kotlin.also' call
    var this_0 = new ChildHandleNode(child);
    // Inline function 'kotlinx.coroutines.JobSupport.attachChild.<anonymous>' call
    this_0.af_1 = this;
    var node = this_0;
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList.<anonymous>' call
        var state = this.lb();
        if (state instanceof Empty) {
          if (state.fg_1) {
            if (this.la_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$1 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.cf();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              // Inline function 'kotlinx.coroutines.JobSupport.attachChild.<anonymous>' call
              var addedBeforeCancellation = list.gf(node, 7);
              var tmp;
              if (addedBeforeCancellation) {
                tmp = true;
              } else {
                var addedBeforeCompletion = list.gf(node, 3);
                var latestState = this.lb();
                var tmp_0;
                if (latestState instanceof Finishing) {
                  tmp_0 = latestState.vg();
                } else {
                  // Inline function 'kotlinx.coroutines.assert' call
                  var tmp69_safe_receiver = latestState instanceof CompletedExceptionally ? latestState : null;
                  tmp_0 = tmp69_safe_receiver == null ? null : tmp69_safe_receiver.xa_1;
                }
                var rootCause = tmp_0;
                node.zd(rootCause);
                var tmp_1;
                if (addedBeforeCompletion) {
                  // Inline function 'kotlinx.coroutines.assert' call
                  tmp_1 = true;
                } else {
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_1;
              }
              if (tmp) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$1 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$1;
    if (added)
      return node;
    var tmp_2 = this.lb();
    var tmp70_safe_receiver = tmp_2 instanceof CompletedExceptionally ? tmp_2 : null;
    node.zd(tmp70_safe_receiver == null ? null : tmp70_safe_receiver.xa_1);
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).db = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).cc = function (cause) {
  };
  protoOf(JobSupport).dc = function () {
    return false;
  };
  protoOf(JobSupport).ec = function () {
    return true;
  };
  protoOf(JobSupport).fc = function (exception) {
    return false;
  };
  protoOf(JobSupport).wa = function (state) {
  };
  protoOf(JobSupport).cb = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.gc() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).gc = function () {
    return this.eb() + '{' + stateString(this, this.lb()) + '}';
  };
  protoOf(JobSupport).eb = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).hc = function () {
    var state = this.lb();
    // Inline function 'kotlin.check' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletionExceptionOrNull.<anonymous>' call
      var message = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_exceptionOrNull__b3j7js(state, this);
  };
  protoOf(JobSupport).ic = function () {
    var state = this.lb();
    // Inline function 'kotlin.check' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletedInternal.<anonymous>' call
      var message = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (state instanceof CompletedExceptionally)
      throw state.xa_1;
    return unboxState(state);
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function InactiveNodeList(list) {
    this.rg_1 = list;
  }
  protoOf(InactiveNodeList).cf = function () {
    return this.rg_1;
  };
  protoOf(InactiveNodeList).sa = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.rg_1.jg('New') : anyToString(this);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.ph_1 = handler;
  }
  protoOf(InvokeOnCompletion).we = function () {
    return false;
  };
  protoOf(InvokeOnCompletion).zd = function (cause) {
    return this.ph_1(cause);
  };
  function InvokeOnCancelling(handler) {
    JobNode.call(this);
    this.uh_1 = handler;
    this.vh_1 = atomic$boolean$1(false);
  }
  protoOf(InvokeOnCancelling).we = function () {
    return true;
  };
  protoOf(InvokeOnCancelling).zd = function (cause) {
    if (this.vh_1.atomicfu$compareAndSet(false, true))
      this.uh_1(cause);
  };
  function ChildHandleNode(childJob) {
    JobNode.call(this);
    this.bh_1 = childJob;
  }
  protoOf(ChildHandleNode).we = function () {
    return true;
  };
  protoOf(ChildHandleNode).zd = function (cause) {
    return this.bh_1.xb(this.bf());
  };
  protoOf(ChildHandleNode).yb = function (cause) {
    return this.bf().yb(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp74_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp0_elvis_lhs = tmp74_safe_receiver == null ? null : tmp74_safe_receiver.wh_1;
    return tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs;
  }
  function IncompleteStateBox(state) {
    this.wh_1 = state;
  }
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.zh();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).zh = function () {
    var main = Dispatchers_getInstance().ei();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.yh();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function TimeoutCancellationException() {
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).lf = function (context) {
    return false;
  };
  protoOf(Unconfined).mf = function (context, block) {
    var yieldContext = context.p5(Key_instance_3);
    if (!(yieldContext == null)) {
      yieldContext.hi_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
  }
  function Segment() {
  }
  function ConcurrentLinkedListNode() {
  }
  function handleUncaughtCoroutineException(context, exception) {
    var _iterator__ex2g4s = get_platformExceptionHandlers().e();
    while (_iterator__ex2g4s.f()) {
      var handler = _iterator__ex2g4s.g();
      try {
        handler.of(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _unused_var__etf5q3 = $p;
          return Unit_instance;
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.dd_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.zc_1 = dispatcher;
    this.ad_1 = continuation;
    this.bd_1 = get_UNDEFINED();
    this.cd_1 = threadContextElements(this.i5());
    this.dd_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).i5 = function () {
    return this.ad_1.i5();
  };
  protoOf(DispatchedContinuation).ed = function () {
    return !(this.dd_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).ii = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.dd_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).nf = function () {
    this.ii();
    var tmp148_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp148_safe_receiver == null)
      null;
    else {
      tmp148_safe_receiver.id();
    }
  };
  protoOf(DispatchedContinuation).fe = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.dd_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.dd_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.require' call
          if (!this.dd_1.atomicfu$compareAndSet(state, null)) {
            // Inline function 'kotlin.require.<anonymous>' call
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          // Inline function 'kotlin.error' call
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).gd = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.dd_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.dd_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.dd_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).md = function () {
    var state = this.bd_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.bd_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).jd = function () {
    return this;
  };
  protoOf(DispatchedContinuation).n5 = function (result) {
    var state = toState_0(result);
    if (this.zc_1.lf(this.i5())) {
      this.bd_1 = state;
      this.fd_1 = 0;
      this.zc_1.mf(this.i5(), this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().bg();
        if (false && eventLoop.wf()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.vf()) {
          this.bd_1 = state;
          this.fd_1 = 0;
          eventLoop.uf(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.xf(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            this.i5();
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.cd_1;
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>.<anonymous>' call
            this.ad_1.n5(result);
            $l$loop: while (eventLoop.tf()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.pe(e);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.yf(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.zc_1.toString() + ', ' + toDebugString(this.ad_1) + ']';
  };
  function resumeCancellableWith(_this__u8e3s4, result) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      var state = toState_0(result);
      if (_this__u8e3s4.zc_1.lf(_this__u8e3s4.i5())) {
        _this__u8e3s4.bd_1 = state;
        _this__u8e3s4.fd_1 = 1;
        _this__u8e3s4.zc_1.mf(_this__u8e3s4.i5(), _this__u8e3s4);
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().bg();
          if (false && eventLoop.wf()) {
            break $l$block;
          }
          var tmp_0;
          if (eventLoop.vf()) {
            _this__u8e3s4.bd_1 = state;
            _this__u8e3s4.fd_1 = 1;
            eventLoop.uf(_this__u8e3s4);
            tmp_0 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.xf(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.i5().p5(Key_instance_2);
                if (!(job == null) && !job.sa()) {
                  var cause = job.pb();
                  _this__u8e3s4.nd(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.n5(tmp$ret$1);
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                _this__u8e3s4.ad_1;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.cd_1;
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith.<anonymous>' call
                _this__u8e3s4.ad_1.n5(result);
              }
              $l$loop: while (eventLoop.tf()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.pe(e);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.yf(true);
            }
            tmp_0 = false;
          }
        }
      }
      tmp = Unit_instance;
    } else {
      _this__u8e3s4.n5(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.fd_1 = resumeMode;
  }
  protoOf(DispatchedTask).nd = function (takenState, cause) {
  };
  protoOf(DispatchedTask).ee = function (state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).me = function (state) {
    var tmp151_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp151_safe_receiver == null ? null : tmp151_safe_receiver.xa_1;
  };
  protoOf(DispatchedTask).oe = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    var fatalException = null;
    try {
      var tmp = this.jd();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.ad_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.cd_1;
      // Inline function 'kotlinx.coroutines.DispatchedTask.run.<anonymous>' call
      var context = continuation.i5();
      var state = this.md();
      var exception = this.me(state);
      var job = exception == null && get_isCancellableMode(this.fd_1) ? context.p5(Key_instance_2) : null;
      if (!(job == null) && !job.sa()) {
        var cause = job.pb();
        this.nd(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.n5(tmp$ret$0);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.n5(tmp$ret$1);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.ee(state);
          var tmp$ret$3 = _Result___init__impl__xyqfz8(value);
          continuation.n5(tmp$ret$3);
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp152_safe_receiver = fatalException;
      if (tmp152_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlinx.coroutines.DispatchedTask.run.<anonymous>' call
        this.pe(tmp152_safe_receiver);
      }
    }
  };
  protoOf(DispatchedTask).pe = function (exception) {
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", exception);
    handleCoroutineException(this.jd().i5(), reason);
  };
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.jd();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.fd_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.zc_1;
      var context = delegate.i5();
      if (dispatcher.lf(context)) {
        dispatcher.mf(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().bg();
    if (eventLoop.vf()) {
      eventLoop.uf(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.xf(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.jd(), true);
        $l$loop: while (eventLoop.tf()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.pe(e);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.yf(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.md();
    var exception = _this__u8e3s4.me(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.ee(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      this_0.ad_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.cd_1;
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith.<anonymous>' call
      this_0.ad_1.n5(result);
    } else {
      delegate.n5(result);
    }
  }
  function Symbol(symbol) {
    this.ji_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.ji_1 + '>';
  };
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(completion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(fatalCompletion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure(completion, e) {
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.n5(tmp$ret$0);
    throw e;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    var actualCompletion = completion;
    var tmp;
    try {
      // Inline function 'kotlinx.coroutines.withCoroutineContext' call
      actualCompletion.i5();
      // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineResumed' call
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, receiver, actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(e));
        actualCompletion.n5(tmp$ret$4);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
      var tmp$ret$6 = _Result___init__impl__xyqfz8(value_0);
      actualCompletion.n5(tmp$ret$6);
    }
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' || typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return !(typeof navigator === 'undefined') && navigator != null && navigator.userAgent != null && !(typeof navigator.userAgent === 'undefined') && !(typeof navigator.userAgent.match === 'undefined') && navigator.userAgent.match('\\bjsdom\\b');
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).p6();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).mi = function () {
    process.nextTick(this.ti_1.ri_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.xi();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.qi_1 = dispatcher;
    var tmp = this;
    tmp.ri_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).yi = function () {
    this.qi_1.mi();
  };
  protoOf(ScheduledMessageQueue).zi = function () {
    setTimeout(this.ri_1, 0);
  };
  protoOf(ScheduledMessageQueue).aj = function (timeout) {
    setTimeout(this.ri_1, timeout);
  };
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.gj_1 && event.data == this$0.hj_1) {
        event.stopPropagation();
        this$0.xi();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.xi();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.gj_1 = window_0;
    this.hj_1 = 'dispatchCoroutine';
    this.gj_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).yi = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).zi = function () {
    this.gj_1.postMessage(this.hj_1, '*');
  };
  function await_0(_this__u8e3s4, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.kd();
    // Inline function 'kotlinx.coroutines.await.<anonymous>' call
    var tmp = await$lambda(cancellable);
    _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
    return cancellable.ce();
  }
  function promise(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    return asPromise(async(_this__u8e3s4, context, start, block));
  }
  function asPromise(_this__u8e3s4) {
    var promise = new Promise(asPromise$lambda(_this__u8e3s4));
    // Inline function 'kotlin.js.asDynamic' call
    promise.deferred = _this__u8e3s4;
    return promise;
  }
  function await$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      this_0.n5(tmp$ret$0);
      return Unit_instance;
    };
  }
  function await$lambda_0($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(it));
      this_0.n5(tmp$ret$0);
      return Unit_instance;
    };
  }
  function asPromise$lambda$lambda($this_asPromise, $reject, $resolve) {
    return function (it) {
      var e = $this_asPromise.hc();
      var tmp;
      if (!(e == null)) {
        tmp = $reject(e);
      } else {
        tmp = $resolve($this_asPromise.nc());
      }
      return Unit_instance;
    };
  }
  function asPromise$lambda($this_asPromise) {
    return function (resolve, reject) {
      $this_asPromise.sb(asPromise$lambda$lambda($this_asPromise, reject, resolve));
      return Unit_instance;
    };
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function propagateExceptionFinalResort(exception) {
    console.error(exception.toString());
  }
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).mf = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).mi = function () {
    this.ti_1.aj(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.ti_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).mf = function (context, block) {
    this.ti_1.cj(block);
  };
  function MessageQueue() {
    this.ui_1 = ArrayDeque_init_$Create$();
    this.vi_1 = 16;
    this.wi_1 = false;
  }
  protoOf(MessageQueue).bj = function (element) {
    return this.ui_1.o(element);
  };
  protoOf(MessageQueue).o = function (element) {
    return this.bj((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).z1 = function (index) {
    return this.ui_1.z1(index);
  };
  protoOf(MessageQueue).i = function (index) {
    return this.ui_1.i(index);
  };
  protoOf(MessageQueue).q = function () {
    return this.ui_1.q();
  };
  protoOf(MessageQueue).e = function () {
    return this.ui_1.e();
  };
  protoOf(MessageQueue).h = function () {
    return this.ui_1.y7_1;
  };
  protoOf(MessageQueue).cj = function (element) {
    this.bj(element);
    if (!this.wi_1) {
      this.wi_1 = true;
      this.yi();
    }
  };
  protoOf(MessageQueue).xi = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.vi_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.oe();
        }
         while (inductionVariable < times);
    }finally {
      if (this.q()) {
        this.wi_1 = false;
      } else {
        this.zi();
      }
    }
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.pj_1 = window_0;
    this.qj_1 = new WindowMessageQueue(this.pj_1);
  }
  protoOf(WindowDispatcher).mf = function (context, block) {
    return this.qj_1.cj(block);
  };
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.ra().r8(context);
    return !(combined === Dispatchers_getInstance().ai_1) && combined.p5(Key_instance) == null ? combined.r8(Dispatchers_getInstance().ai_1) : combined;
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.ai_1 = createDefaultDispatcher();
    this.bi_1 = Unconfined_getInstance();
    this.ci_1 = new JsMainDispatcher(this.ai_1, false);
    this.di_1 = null;
  }
  protoOf(Dispatchers).ei = function () {
    var tmp0_elvis_lhs = this.di_1;
    return tmp0_elvis_lhs == null ? this.ci_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.sj_1 = delegate;
    this.tj_1 = invokeImmediately;
    this.uj_1 = this.tj_1 ? this : new JsMainDispatcher(this.sj_1, true);
  }
  protoOf(JsMainDispatcher).yh = function () {
    return this.uj_1;
  };
  protoOf(JsMainDispatcher).lf = function (context) {
    return !this.tj_1;
  };
  protoOf(JsMainDispatcher).mf = function (context, block) {
    return this.sj_1.mf(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.zh();
    return tmp0_elvis_lhs == null ? this.sj_1.toString() : tmp0_elvis_lhs;
  };
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    captureStack(this, JobCancellationException);
    this.vj_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.vj_1);
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.vj_1, this.vj_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.vj_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0;
  };
  function Runnable() {
  }
  function SchedulerTask() {
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function LockFreeLinkedListHead() {
    LockFreeLinkedListNode.call(this);
  }
  function LockFreeLinkedListNode() {
    this.df_1 = this;
    this.ef_1 = this;
    this.ff_1 = false;
  }
  protoOf(LockFreeLinkedListNode).gf = function (node, permissionsBitmask) {
    var prev = this.ef_1;
    var tmp;
    if (prev instanceof ListClosed) {
      tmp = ((prev.zj_1 & permissionsBitmask) === 0 && prev.gf(node, permissionsBitmask));
    } else {
      node.df_1 = this;
      node.ef_1 = prev;
      prev.df_1 = node;
      this.ef_1 = node;
      tmp = true;
    }
    return tmp;
  };
  protoOf(LockFreeLinkedListNode).kg = function (forbiddenElementsBit) {
    this.gf(new ListClosed(forbiddenElementsBit), forbiddenElementsBit);
  };
  protoOf(LockFreeLinkedListNode).hf = function () {
    if (this.ff_1)
      return false;
    var prev = this.ef_1;
    var next = this.df_1;
    prev.df_1 = next;
    next.ef_1 = prev;
    this.ff_1 = true;
    return true;
  };
  protoOf(LockFreeLinkedListNode).if = function (node) {
    if (!(this.df_1 === this))
      return false;
    this.gf(node, -2147483648);
    return true;
  };
  function ListClosed(forbiddenElementsBitmask) {
    LockFreeLinkedListNode.call(this);
    this.zj_1 = forbiddenElementsBitmask;
  }
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function SynchronizedObject() {
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.cg_1 = null;
  }
  protoOf(CommonThreadLocal).dg = function () {
    var tmp = this.cg_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).eg = function (value) {
    this.cg_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).r8 = plus;
  protoOf(JobSupport).p5 = get_0;
  protoOf(JobSupport).q8 = fold;
  protoOf(JobSupport).p8 = minusKey_0;
  protoOf(CoroutineDispatcher).p5 = get;
  protoOf(CoroutineDispatcher).p8 = minusKey;
  //endregion
  //region block: init
  Active_instance = new Active();
  Key_instance_1 = new Key_0();
  GlobalScope_instance = new GlobalScope();
  Key_instance_2 = new Key_1();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_3 = new Key_2();
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = await_0;
  _.$_$.b = GlobalScope_instance;
  _.$_$.c = CoroutineScope;
  _.$_$.d = promise;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
