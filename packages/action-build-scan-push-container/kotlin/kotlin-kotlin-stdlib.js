//region block: polyfills
(function () {
  if (typeof globalThis === 'object')
    return;
  Object.defineProperty(Object.prototype, '__magic__', {get: function () {
    return this;
  }, configurable: true});
  __magic__.globalThis = __magic__;
  delete Object.prototype.__magic__;
}());
if (typeof Math.imul === 'undefined') {
  Math.imul = function imul(a, b) {
    return (a & 4.29490176E9) * (b & 65535) + (a & 65535) * (b | 0) | 0;
  };
}
if (typeof ArrayBuffer.isView === 'undefined') {
  ArrayBuffer.isView = function (a) {
    return a != null && a.__proto__ != null && a.__proto__.__proto__ === Int8Array.prototype.__proto__;
  };
}
if (typeof Array.prototype.fill === 'undefined') {
  // Polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill#Polyfill
  Object.defineProperty(Array.prototype, 'fill', {value: function (value) {
    // Steps 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }
    var O = Object(this); // Steps 3-5.
    var len = O.length >>> 0; // Steps 6-7.
    var start = arguments[1];
    var relativeStart = start >> 0; // Step 8.
    var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len); // Steps 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0; // Step 11.
    var finalValue = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len); // Step 12.
    while (k < finalValue) {
      O[k] = value;
      k++;
    }
    ; // Step 13.
    return O;
  }});
}
[Int8Array, Int16Array, Uint16Array, Int32Array, Float32Array, Float64Array].forEach(function (TypedArray) {
  if (typeof TypedArray.prototype.fill === 'undefined') {
    Object.defineProperty(TypedArray.prototype, 'fill', {value: Array.prototype.fill});
  }
});
if (typeof Math.clz32 === 'undefined') {
  Math.clz32 = function (log, LN2) {
    return function (x) {
      var asUint = x >>> 0;
      if (asUint === 0) {
        return 32;
      }
      return 31 - (log(asUint) / LN2 | 0) | 0; // the "| 0" acts like math.floor
    };
  }(Math.log, Math.LN2);
}
//endregion
(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kotlin-kotlin-stdlib'] = factory(typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined' ? {} : globalThis['kotlin-kotlin-stdlib']);
}(function (_) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var isView = ArrayBuffer.isView;
  var clz32 = Math.clz32;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(CharSequence, 'CharSequence');
  initMetadataForClass(Number_0, 'Number');
  initMetadataForClass(Char, 'Char');
  initMetadataForInterface(Collection, 'Collection');
  initMetadataForInterface(KtList, 'List', VOID, VOID, [Collection]);
  initMetadataForInterface(KtSet, 'Set', VOID, VOID, [Collection]);
  initMetadataForInterface(Entry, 'Entry');
  initMetadataForInterface(KtMap, 'Map');
  initMetadataForCompanion(Companion);
  initMetadataForClass(Enum, 'Enum');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Long, 'Long', VOID, Number_0);
  initMetadataForClass(arrayIterator$1);
  initMetadataForObject(Unit, 'Unit');
  initMetadataForClass(AbstractCollection, 'AbstractCollection', VOID, VOID, [Collection]);
  initMetadataForClass(AbstractMutableCollection, 'AbstractMutableCollection', VOID, AbstractCollection, [AbstractCollection, Collection]);
  initMetadataForClass(IteratorImpl, 'IteratorImpl');
  initMetadataForClass(AbstractMutableList, 'AbstractMutableList', VOID, AbstractMutableCollection, [AbstractMutableCollection, Collection, KtList]);
  initMetadataForClass(AbstractMutableSet, 'AbstractMutableSet', VOID, AbstractMutableCollection, [AbstractMutableCollection, Collection, KtSet]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(ArrayList, 'ArrayList', ArrayList_init_$Create$, AbstractMutableList, [AbstractMutableList, Collection, KtList]);
  initMetadataForClass(HashSet, 'HashSet', HashSet_init_$Create$, AbstractMutableSet, [AbstractMutableSet, Collection, KtSet]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Itr, 'Itr');
  initMetadataForClass(KeysItr, 'KeysItr', VOID, Itr);
  initMetadataForClass(EntriesItr, 'EntriesItr', VOID, Itr);
  initMetadataForClass(EntryRef, 'EntryRef', VOID, VOID, [Entry]);
  function containsAllEntries(m) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(m, Collection)) {
        tmp = m.g();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = m.c();
      while (_iterator__ex2g4s.d()) {
        var element = _iterator__ex2g4s.e();
        // Inline function 'kotlin.collections.InternalMap.containsAllEntries.<anonymous>' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var entry = element;
        var tmp_0;
        if (!(entry == null) ? isInterface(entry, Entry) : false) {
          tmp_0 = this.v3(entry);
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  initMetadataForInterface(InternalMap, 'InternalMap');
  initMetadataForClass(InternalHashMap, 'InternalHashMap', InternalHashMap_init_$Create$, VOID, [InternalMap]);
  initMetadataForClass(LinkedHashSet, 'LinkedHashSet', LinkedHashSet_init_$Create$, HashSet, [HashSet, Collection, KtSet]);
  initMetadataForInterface(Continuation, 'Continuation');
  initMetadataForClass(InterceptedCoroutine, 'InterceptedCoroutine', VOID, VOID, [Continuation]);
  initMetadataForClass(CoroutineImpl, 'CoroutineImpl', VOID, InterceptedCoroutine, [InterceptedCoroutine, Continuation]);
  initMetadataForObject(CompletedContinuation, 'CompletedContinuation', VOID, VOID, [Continuation]);
  initMetadataForClass(Exception, 'Exception', Exception_init_$Create$, Error);
  initMetadataForClass(RuntimeException, 'RuntimeException', RuntimeException_init_$Create$, Exception);
  initMetadataForClass(IllegalStateException, 'IllegalStateException', IllegalStateException_init_$Create$, RuntimeException);
  initMetadataForClass(CancellationException, 'CancellationException', CancellationException_init_$Create$, IllegalStateException);
  initMetadataForClass(createCoroutineUnintercepted$$inlined$createCoroutineFromSuspendFunction$1, VOID, VOID, CoroutineImpl);
  initMetadataForClass(createSimpleCoroutineForSuspendFunction$1, VOID, VOID, CoroutineImpl);
  initMetadataForClass(EmptyContinuation$$inlined$Continuation$1, VOID, VOID, VOID, [Continuation]);
  initMetadataForClass(IllegalArgumentException, 'IllegalArgumentException', IllegalArgumentException_init_$Create$, RuntimeException);
  initMetadataForClass(UnsupportedOperationException, 'UnsupportedOperationException', UnsupportedOperationException_init_$Create$, RuntimeException);
  initMetadataForClass(NoSuchElementException, 'NoSuchElementException', NoSuchElementException_init_$Create$, RuntimeException);
  initMetadataForClass(Error_0, 'Error', Error_init_$Create$, Error);
  initMetadataForClass(IndexOutOfBoundsException, 'IndexOutOfBoundsException', IndexOutOfBoundsException_init_$Create$, RuntimeException);
  initMetadataForClass(ConcurrentModificationException, 'ConcurrentModificationException', ConcurrentModificationException_init_$Create$, RuntimeException);
  initMetadataForClass(NullPointerException, 'NullPointerException', NullPointerException_init_$Create$, RuntimeException);
  initMetadataForClass(NoWhenBranchMatchedException, 'NoWhenBranchMatchedException', NoWhenBranchMatchedException_init_$Create$, RuntimeException);
  initMetadataForClass(ClassCastException, 'ClassCastException', ClassCastException_init_$Create$, RuntimeException);
  initMetadataForClass(UninitializedPropertyAccessException, 'UninitializedPropertyAccessException', UninitializedPropertyAccessException_init_$Create$, RuntimeException);
  initMetadataForInterface(KClass, 'KClass');
  initMetadataForClass(KClassImpl, 'KClassImpl', VOID, VOID, [KClass]);
  initMetadataForObject(NothingKClassImpl, 'NothingKClassImpl', VOID, KClassImpl);
  initMetadataForClass(ErrorKClass, 'ErrorKClass', ErrorKClass, VOID, [KClass]);
  initMetadataForClass(PrimitiveKClassImpl, 'PrimitiveKClassImpl', VOID, KClassImpl);
  initMetadataForClass(SimpleKClassImpl, 'SimpleKClassImpl', VOID, KClassImpl);
  initMetadataForObject(PrimitiveClasses, 'PrimitiveClasses');
  initMetadataForClass(StringBuilder, 'StringBuilder', StringBuilder_init_$Create$_0, VOID, [CharSequence]);
  initMetadataForCompanion(Companion_3);
  initMetadataForCompanion(Companion_4);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(ArrayDeque, 'ArrayDeque', ArrayDeque_init_$Create$, AbstractMutableList);
  initMetadataForClass(ArrayAsCollection, 'ArrayAsCollection', VOID, VOID, [Collection]);
  initMetadataForObject(Key, 'Key');
  function plus(context) {
    var tmp;
    if (context === EmptyCoroutineContext_getInstance()) {
      tmp = this;
    } else {
      tmp = context.i7(this, CoroutineContext$plus$lambda);
    }
    return tmp;
  }
  initMetadataForInterface(CoroutineContext, 'CoroutineContext');
  function get(key) {
    var tmp;
    if (equals(this.k(), key)) {
      tmp = isInterface(this, Element) ? this : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function fold(initial, operation) {
    return operation(initial, this);
  }
  function minusKey(key) {
    return equals(this.k(), key) ? EmptyCoroutineContext_getInstance() : this;
  }
  initMetadataForInterface(Element, 'Element', VOID, VOID, [CoroutineContext]);
  function releaseInterceptedContinuation(continuation) {
  }
  function get_0(key) {
    if (key instanceof AbstractCoroutineContextKey) {
      var tmp;
      if (key.g7(this.k())) {
        var tmp_0 = key.f7(this);
        tmp = (!(tmp_0 == null) ? isInterface(tmp_0, Element) : false) ? tmp_0 : null;
      } else {
        tmp = null;
      }
      return tmp;
    }
    var tmp_1;
    if (Key_instance === key) {
      tmp_1 = isInterface(this, Element) ? this : THROW_CCE();
    } else {
      tmp_1 = null;
    }
    return tmp_1;
  }
  function minusKey_0(key) {
    if (key instanceof AbstractCoroutineContextKey) {
      return key.g7(this.k()) && !(key.f7(this) == null) ? EmptyCoroutineContext_getInstance() : this;
    }
    return Key_instance === key ? EmptyCoroutineContext_getInstance() : this;
  }
  initMetadataForInterface(ContinuationInterceptor, 'ContinuationInterceptor', VOID, VOID, [Element]);
  initMetadataForObject(EmptyCoroutineContext, 'EmptyCoroutineContext', VOID, VOID, [CoroutineContext]);
  initMetadataForClass(CombinedContext, 'CombinedContext', VOID, VOID, [CoroutineContext]);
  initMetadataForClass(AbstractCoroutineContextKey, 'AbstractCoroutineContextKey');
  initMetadataForClass(AbstractCoroutineContextElement, 'AbstractCoroutineContextElement', VOID, VOID, [Element]);
  initMetadataForClass(CoroutineSingletons, 'CoroutineSingletons', VOID, Enum);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(Failure, 'Failure');
  initMetadataForClass(NotImplementedError, 'NotImplementedError', NotImplementedError, Error_0);
  //endregion
  function CharSequence() {
  }
  function Number_0() {
  }
  function indexOf(_this__u8e3s4, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last = _this__u8e3s4.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this__u8e3s4[index] == null) {
            return index;
          }
        }
         while (inductionVariable <= last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = _this__u8e3s4.length - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals(element, _this__u8e3s4[index_0])) {
            return index_0;
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    return -1;
  }
  function get_lastIndex(_this__u8e3s4) {
    return _this__u8e3s4.length - 1 | 0;
  }
  function joinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return joinTo(_this__u8e3s4, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.b(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    $l$loop: while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.b(separator);
      }
      if (limit < 0 || count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 && count > limit) {
      buffer.b(truncated);
    }
    buffer.b(postfix);
    return buffer;
  }
  function joinToString_0(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return joinTo_0(_this__u8e3s4, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinTo_0(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.b(prefix);
    var count = 0;
    var _iterator__ex2g4s = _this__u8e3s4.c();
    $l$loop: while (_iterator__ex2g4s.d()) {
      var element = _iterator__ex2g4s.e();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.b(separator);
      }
      if (limit < 0 || count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 && count > limit) {
      buffer.b(truncated);
    }
    buffer.b(postfix);
    return buffer;
  }
  function coerceAtLeast(_this__u8e3s4, minimumValue) {
    return _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
  }
  function coerceAtMost(_this__u8e3s4, maximumValue) {
    return _this__u8e3s4 > maximumValue ? maximumValue : _this__u8e3s4;
  }
  function _Char___init__impl__6a9atx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function toString($this) {
    // Inline function 'kotlin.js.unsafeCast' call
    return String.fromCharCode(_get_value__a43j40($this));
  }
  function Char() {
  }
  function KtList() {
  }
  function Collection() {
  }
  function KtSet() {
  }
  function Entry() {
  }
  function KtMap() {
  }
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function Enum(name, ordinal) {
    this.n_1 = name;
    this.o_1 = ordinal;
  }
  protoOf(Enum).equals = function (other) {
    return this === other;
  };
  protoOf(Enum).hashCode = function () {
    return identityHashCode(this);
  };
  protoOf(Enum).toString = function () {
    return this.n_1;
  };
  function toString_0(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : toString_1(_this__u8e3s4);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.p_1 = new Long(0, -2147483648);
    this.q_1 = new Long(-1, 2147483647);
    this.r_1 = 8;
    this.s_1 = 64;
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Long(low, high) {
    Companion_getInstance_0();
    Number_0.call(this);
    this.t_1 = low;
    this.u_1 = high;
  }
  protoOf(Long).v = function (other) {
    return compare(this, other);
  };
  protoOf(Long).w = function (other) {
    return add(this, other);
  };
  protoOf(Long).x = function (other) {
    return subtract(this, other);
  };
  protoOf(Long).y = function (other) {
    return divide(this, other);
  };
  protoOf(Long).z = function () {
    return this.a1().w(new Long(1, 0));
  };
  protoOf(Long).a1 = function () {
    return new Long(~this.t_1, ~this.u_1);
  };
  protoOf(Long).b1 = function () {
    return this.t_1;
  };
  protoOf(Long).c1 = function () {
    return toNumber(this);
  };
  protoOf(Long).toString = function () {
    return toStringImpl(this, 10);
  };
  protoOf(Long).equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Long).hashCode = function () {
    return hashCode_0(this);
  };
  protoOf(Long).valueOf = function () {
    return this.c1();
  };
  function implement(interfaces) {
    var maxSize = 1;
    var masks = [];
    var inductionVariable = 0;
    var last = interfaces.length;
    while (inductionVariable < last) {
      var i = interfaces[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var currentSize = maxSize;
      var tmp0_elvis_lhs = i.prototype.$imask$;
      var imask = tmp0_elvis_lhs == null ? i.$imask$ : tmp0_elvis_lhs;
      if (!(imask == null)) {
        masks.push(imask);
        currentSize = imask.length;
      }
      var iid = i.$metadata$.iid;
      var tmp;
      if (iid == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.js.implement.<anonymous>' call
        tmp = bitMaskWith(iid);
      }
      var iidImask = tmp;
      if (!(iidImask == null)) {
        masks.push(iidImask);
        currentSize = Math.max(currentSize, iidImask.length);
      }
      if (currentSize > maxSize) {
        maxSize = currentSize;
      }
    }
    return compositeBitMask(maxSize, masks);
  }
  function bitMaskWith(activeBit) {
    var numberIndex = activeBit >> 5;
    var intArray = new Int32Array(numberIndex + 1 | 0);
    var positionInNumber = activeBit & 31;
    var numberWithSettledBit = 1 << positionInNumber;
    intArray[numberIndex] = intArray[numberIndex] | numberWithSettledBit;
    return intArray;
  }
  function compositeBitMask(capacity, masks) {
    var tmp = 0;
    var tmp_0 = new Int32Array(capacity);
    while (tmp < capacity) {
      var tmp_1 = tmp;
      var result = 0;
      var inductionVariable = 0;
      var last = masks.length;
      while (inductionVariable < last) {
        var mask = masks[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (tmp_1 < mask.length) {
          result = result | mask[tmp_1];
        }
      }
      tmp_0[tmp_1] = result;
      tmp = tmp + 1 | 0;
    }
    return tmp_0;
  }
  function isBitSet(_this__u8e3s4, possibleActiveBit) {
    var numberIndex = possibleActiveBit >> 5;
    if (numberIndex > _this__u8e3s4.length)
      return false;
    var positionInNumber = possibleActiveBit & 31;
    var numberWithSettledBit = 1 << positionInNumber;
    return !((_this__u8e3s4[numberIndex] & numberWithSettledBit) === 0);
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last = array.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last));
    return array;
  }
  function arrayIterator(array) {
    return new arrayIterator$1(array);
  }
  function arrayIterator$1($array) {
    this.e1_1 = $array;
    this.d1_1 = 0;
  }
  protoOf(arrayIterator$1).d = function () {
    return !(this.d1_1 === this.e1_1.length);
  };
  protoOf(arrayIterator$1).e = function () {
    var tmp;
    if (!(this.d1_1 === this.e1_1.length)) {
      var _unary__edvuaz = this.d1_1;
      this.d1_1 = _unary__edvuaz + 1 | 0;
      tmp = this.e1_1[_unary__edvuaz];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this.d1_1);
    }
    return tmp;
  };
  function get_buf() {
    _init_properties_bitUtils_kt__nfcg4k();
    return buf;
  }
  var buf;
  function get_bufFloat64() {
    _init_properties_bitUtils_kt__nfcg4k();
    return bufFloat64;
  }
  var bufFloat64;
  var bufFloat32;
  function get_bufInt32() {
    _init_properties_bitUtils_kt__nfcg4k();
    return bufInt32;
  }
  var bufInt32;
  function get_lowIndex() {
    _init_properties_bitUtils_kt__nfcg4k();
    return lowIndex;
  }
  var lowIndex;
  function get_highIndex() {
    _init_properties_bitUtils_kt__nfcg4k();
    return highIndex;
  }
  var highIndex;
  function getNumberHashCode(obj) {
    _init_properties_bitUtils_kt__nfcg4k();
    // Inline function 'kotlin.js.jsBitwiseOr' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    if ((obj | 0) === obj) {
      return numberToInt(obj);
    }
    get_bufFloat64()[0] = obj;
    return imul(get_bufInt32()[get_highIndex()], 31) + get_bufInt32()[get_lowIndex()] | 0;
  }
  var properties_initialized_bitUtils_kt_i2bo3e;
  function _init_properties_bitUtils_kt__nfcg4k() {
    if (!properties_initialized_bitUtils_kt_i2bo3e) {
      properties_initialized_bitUtils_kt_i2bo3e = true;
      buf = new ArrayBuffer(8);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      bufFloat64 = new Float64Array(get_buf());
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      bufFloat32 = new Float32Array(get_buf());
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      bufInt32 = new Int32Array(get_buf());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.js.lowIndex.<anonymous>' call
      get_bufFloat64()[0] = -1.0;
      lowIndex = !(get_bufInt32()[0] === 0) ? 1 : 0;
      highIndex = 1 - get_lowIndex() | 0;
    }
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = a.length;
    } else {
      tmp = a.a();
    }
    return tmp;
  }
  function arrayToString(array) {
    return joinToString(array, ', ', '[', ']', VOID, VOID, arrayToString$lambda);
  }
  function arrayToString$lambda(it) {
    return toString_1(it);
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    // Inline function 'kotlin.js.jsIn' call
    if (!('kotlinHashCodeValue$' in obj)) {
      var hash = calculateRandomHash();
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }
    // Inline function 'kotlin.js.unsafeCast' call
    return obj['kotlinHashCodeValue$'];
  }
  function calculateRandomHash() {
    // Inline function 'kotlin.js.jsBitwiseOr' call
    return Math.random() * 4.294967296E9 | 0;
  }
  function defineProp(obj, name, getter, setter) {
    return Object.defineProperty(obj, name, {configurable: true, get: getter, set: setter});
  }
  function objectCreate(proto) {
    proto = proto === VOID ? null : proto;
    return Object.create(proto);
  }
  function toString_1(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else if (!(typeof o.toString === 'function')) {
      tmp = anyToString(o);
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = o.toString();
    }
    return tmp;
  }
  function anyToString(o) {
    return Object.prototype.toString.call(o);
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var typeOf = typeof obj;
    var tmp;
    switch (typeOf) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp = getBooleanHashCode(obj);
        break;
      case 'string':
        tmp = getStringHashCode(String(obj));
        break;
      case 'bigint':
        tmp = getBigIntHashCode(obj);
        break;
      case 'symbol':
        tmp = getSymbolHashCode(obj);
        break;
      default:
        tmp = function () {
          throw new Error('Unexpected typeof `' + typeOf + '`');
        }();
        break;
    }
    return tmp;
  }
  function getBooleanHashCode(value) {
    return value ? 1231 : 1237;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        var code = str.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function getBigIntHashCode(value) {
    var shiftNumber = BigInt(32);
    var MASK = BigInt(4.294967295E9);
    var bigNumber = value < 0 ? -value : value;
    var hashCode = 0;
    var signum = value < 0 ? -1 : 1;
    while (bigNumber != 0) {
      // Inline function 'kotlin.js.unsafeCast' call
      var chunk = Number(bigNumber & MASK);
      hashCode = imul(31, hashCode) + chunk | 0;
      bigNumber = bigNumber >> shiftNumber;
    }
    return imul(hashCode, signum);
  }
  function getSymbolHashCode(value) {
    var hashCodeMap = symbolIsSharable(value) ? getSymbolMap() : getSymbolWeakMap();
    var cachedHashCode = hashCodeMap.get(value);
    if (cachedHashCode !== VOID)
      return cachedHashCode;
    var hash = calculateRandomHash();
    hashCodeMap.set(value, hash);
    return hash;
  }
  function symbolIsSharable(symbol) {
    return Symbol.keyFor(symbol) != VOID;
  }
  function getSymbolMap() {
    if (symbolMap === VOID) {
      symbolMap = new Map();
    }
    return symbolMap;
  }
  function getSymbolWeakMap() {
    if (symbolWeakMap === VOID) {
      symbolWeakMap = new WeakMap();
    }
    return symbolWeakMap;
  }
  var symbolMap;
  var symbolWeakMap;
  function equals(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }
    if (obj2 == null) {
      return false;
    }
    if (typeof obj1 === 'object' && typeof obj1.equals === 'function') {
      return obj1.equals(obj2);
    }
    if (obj1 !== obj1) {
      return obj2 !== obj2;
    }
    if (typeof obj1 === 'number' && typeof obj2 === 'number') {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_1 = 1 / obj1;
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = tmp_1 === 1 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    return obj1 === obj2;
  }
  function unboxIntrinsic(x) {
    var message = 'Should be lowered';
    throw IllegalStateException_init_$Create$_0(toString_1(message));
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      instance.stack = (new Error()).stack;
    }
  }
  function protoOf(constructor) {
    return constructor.prototype;
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    var errorInfo = calculateErrorInfo(Object.getPrototypeOf(this_));
    if ((errorInfo & 1) === 0) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp1_elvis_lhs = cause == null ? null : cause.toString();
          tmp_0 = tmp1_elvis_lhs == null ? VOID : tmp1_elvis_lhs;
        } else {
          tmp_0 = VOID;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }
    if ((errorInfo & 2) === 0) {
      this_.cause = cause;
    }
    this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function noWhenBranchMatchedException() {
    throw NoWhenBranchMatchedException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function throwUninitializedPropertyAccessException(name) {
    throw UninitializedPropertyAccessException_init_$Create$_0('lateinit property ' + name + ' has not been initialized');
  }
  function get_ZERO() {
    _init_properties_longJs_kt__elc2w5();
    return ZERO;
  }
  var ZERO;
  function get_ONE() {
    _init_properties_longJs_kt__elc2w5();
    return ONE;
  }
  var ONE;
  function get_NEG_ONE() {
    _init_properties_longJs_kt__elc2w5();
    return NEG_ONE;
  }
  var NEG_ONE;
  function get_MAX_VALUE() {
    _init_properties_longJs_kt__elc2w5();
    return MAX_VALUE;
  }
  var MAX_VALUE;
  function get_MIN_VALUE() {
    _init_properties_longJs_kt__elc2w5();
    return MIN_VALUE;
  }
  var MIN_VALUE;
  function get_TWO_PWR_24_() {
    _init_properties_longJs_kt__elc2w5();
    return TWO_PWR_24_;
  }
  var TWO_PWR_24_;
  function compare(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    if (equalsLong(_this__u8e3s4, other)) {
      return 0;
    }
    var thisNeg = isNegative(_this__u8e3s4);
    var otherNeg = isNegative(other);
    return thisNeg && !otherNeg ? -1 : !thisNeg && otherNeg ? 1 : isNegative(subtract(_this__u8e3s4, other)) ? -1 : 1;
  }
  function add(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    var a48 = _this__u8e3s4.u_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.u_1 & 65535;
    var a16 = _this__u8e3s4.t_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.t_1 & 65535;
    var b48 = other.u_1 >>> 16 | 0;
    var b32 = other.u_1 & 65535;
    var b16 = other.t_1 >>> 16 | 0;
    var b00 = other.t_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    return add(_this__u8e3s4, other.z());
  }
  function multiply(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    } else if (isZero(other)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      return isOdd(other) ? get_MIN_VALUE() : get_ZERO();
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return isOdd(_this__u8e3s4) ? get_MIN_VALUE() : get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this__u8e3s4), negate(other));
      } else {
        tmp = negate(multiply(negate(_this__u8e3s4), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this__u8e3s4, negate(other)));
    }
    if (lessThan(_this__u8e3s4, get_TWO_PWR_24_()) && lessThan(other, get_TWO_PWR_24_())) {
      return fromNumber(toNumber(_this__u8e3s4) * toNumber(other));
    }
    var a48 = _this__u8e3s4.u_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.u_1 & 65535;
    var a16 = _this__u8e3s4.t_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.t_1 & 65535;
    var b48 = other.u_1 >>> 16 | 0;
    var b32 = other.u_1 & 65535;
    var b16 = other.t_1 >>> 16 | 0;
    var b00 = other.t_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    if (isZero(other)) {
      throw Exception_init_$Create$_0('division by zero');
    } else if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      if (equalsLong(other, get_ONE()) || equalsLong(other, get_NEG_ONE())) {
        return get_MIN_VALUE();
      } else if (equalsLong(other, get_MIN_VALUE())) {
        return get_ONE();
      } else {
        var halfThis = shiftRight(_this__u8e3s4, 1);
        var approx = shiftLeft(halfThis.y(other), 1);
        if (equalsLong(approx, get_ZERO())) {
          return isNegative(other) ? get_ONE() : get_NEG_ONE();
        } else {
          var rem = subtract(_this__u8e3s4, multiply(other, approx));
          return add(approx, rem.y(other));
        }
      }
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this__u8e3s4).y(negate(other));
      } else {
        tmp = negate(negate(_this__u8e3s4).y(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this__u8e3s4.y(negate(other)));
    }
    var res = get_ZERO();
    var rem_0 = _this__u8e3s4;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) || greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = get_ONE();
      }
      res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this__u8e3s4, numBits) {
    _init_properties_longJs_kt__elc2w5();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.t_1 << numBits_0, _this__u8e3s4.u_1 << numBits_0 | (_this__u8e3s4.t_1 >>> (32 - numBits_0 | 0) | 0));
      } else {
        return new Long(0, _this__u8e3s4.t_1 << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this__u8e3s4, numBits) {
    _init_properties_longJs_kt__elc2w5();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.t_1 >>> numBits_0 | 0 | _this__u8e3s4.u_1 << (32 - numBits_0 | 0), _this__u8e3s4.u_1 >> numBits_0);
      } else {
        return new Long(_this__u8e3s4.u_1 >> (numBits_0 - 32 | 0), _this__u8e3s4.u_1 >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this__u8e3s4) {
    _init_properties_longJs_kt__elc2w5();
    return _this__u8e3s4.u_1 * 4.294967296E9 + getLowBitsUnsigned(_this__u8e3s4);
  }
  function toStringImpl(_this__u8e3s4, radix) {
    _init_properties_longJs_kt__elc2w5();
    if (radix < 2 || 36 < radix) {
      throw Exception_init_$Create$_0('radix out of range: ' + radix);
    }
    if (isZero(_this__u8e3s4)) {
      return '0';
    }
    if (isNegative(_this__u8e3s4)) {
      if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
        var radixLong = fromInt(radix);
        var div = _this__u8e3s4.y(radixLong);
        var rem = subtract(multiply(div, radixLong), _this__u8e3s4).b1();
        var tmp = toStringImpl(div, radix);
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        return tmp + rem.toString(radix);
      } else {
        return '-' + toStringImpl(negate(_this__u8e3s4), radix);
      }
    }
    var digitsPerTime = radix === 2 ? 31 : radix <= 10 ? 9 : radix <= 21 ? 7 : radix <= 35 ? 6 : 5;
    var radixToPower = fromNumber(Math.pow(radix, digitsPerTime));
    var rem_0 = _this__u8e3s4;
    var result = '';
    while (true) {
      var remDiv = rem_0.y(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).b1();
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var digits = intval.toString(radix);
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < digitsPerTime) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function equalsLong(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    return _this__u8e3s4.u_1 === other.u_1 && _this__u8e3s4.t_1 === other.t_1;
  }
  function hashCode_0(l) {
    _init_properties_longJs_kt__elc2w5();
    return l.t_1 ^ l.u_1;
  }
  function fromInt(value) {
    _init_properties_longJs_kt__elc2w5();
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this__u8e3s4) {
    _init_properties_longJs_kt__elc2w5();
    return _this__u8e3s4.u_1 < 0;
  }
  function isZero(_this__u8e3s4) {
    _init_properties_longJs_kt__elc2w5();
    return _this__u8e3s4.u_1 === 0 && _this__u8e3s4.t_1 === 0;
  }
  function isOdd(_this__u8e3s4) {
    _init_properties_longJs_kt__elc2w5();
    return (_this__u8e3s4.t_1 & 1) === 1;
  }
  function negate(_this__u8e3s4) {
    _init_properties_longJs_kt__elc2w5();
    return _this__u8e3s4.z();
  }
  function lessThan(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    return compare(_this__u8e3s4, other) < 0;
  }
  function fromNumber(value) {
    _init_properties_longJs_kt__elc2w5();
    if (isNaN_0(value)) {
      return get_ZERO();
    } else if (value <= -9.223372036854776E18) {
      return get_MIN_VALUE();
    } else if (value + 1 >= 9.223372036854776E18) {
      return get_MAX_VALUE();
    } else if (value < 0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      var tmp = value % twoPwr32 | 0;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      var tmp$ret$1 = value / twoPwr32 | 0;
      return new Long(tmp, tmp$ret$1);
    }
  }
  function greaterThan(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    return compare(_this__u8e3s4, other) > 0;
  }
  function greaterThanOrEqual(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    return compare(_this__u8e3s4, other) >= 0;
  }
  function getLowBitsUnsigned(_this__u8e3s4) {
    _init_properties_longJs_kt__elc2w5();
    return _this__u8e3s4.t_1 >= 0 ? _this__u8e3s4.t_1 : 4.294967296E9 + _this__u8e3s4.t_1;
  }
  var properties_initialized_longJs_kt_4syf89;
  function _init_properties_longJs_kt__elc2w5() {
    if (!properties_initialized_longJs_kt_4syf89) {
      properties_initialized_longJs_kt_4syf89 = true;
      ZERO = fromInt(0);
      ONE = fromInt(1);
      NEG_ONE = fromInt(-1);
      MAX_VALUE = new Long(-1, 2147483647);
      MIN_VALUE = new Long(0, -2147483648);
      TWO_PWR_24_ = fromInt(16777216);
    }
  }
  function createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
    var undef = VOID;
    var iid = kind === 'interface' ? generateInterfaceId() : VOID;
    return {kind: kind, simpleName: name, associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, $kClass$: undef, defaultConstructor: defaultConstructor, iid: iid};
  }
  function generateInterfaceId() {
    if (globalInterfaceId === VOID) {
      globalInterfaceId = 0;
    }
    // Inline function 'kotlin.js.unsafeCast' call
    globalInterfaceId = globalInterfaceId + 1 | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    return globalInterfaceId;
  }
  var globalInterfaceId;
  function initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    if (!(parent == null)) {
      ctor.prototype = Object.create(parent.prototype);
      ctor.prototype.constructor = ctor;
    }
    var metadata = createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity);
    ctor.$metadata$ = metadata;
    if (!(interfaces == null)) {
      var receiver = !equals(metadata.iid, VOID) ? ctor : ctor.prototype;
      receiver.$imask$ = implement(interfaces);
    }
  }
  function initMetadataForClass(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    var kind = 'class';
    initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
  }
  function initMetadataForObject(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    var kind = 'object';
    initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
  }
  function initMetadataForInterface(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    var kind = 'interface';
    initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
  }
  function initMetadataForLambda(ctor, parent, interfaces, suspendArity) {
    initMetadataForClass(ctor, 'Lambda', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function initMetadataForCoroutine(ctor, parent, interfaces, suspendArity) {
    initMetadataForClass(ctor, 'Coroutine', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function initMetadataForFunctionReference(ctor, parent, interfaces, suspendArity) {
    initMetadataForClass(ctor, 'FunctionReference', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function initMetadataForCompanion(ctor, parent, interfaces, suspendArity) {
    initMetadataForObject(ctor, 'Companion', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.b1();
    } else {
      tmp = doubleToInt(a);
    }
    return tmp;
  }
  function doubleToInt(a) {
    var tmp;
    if (a > 2147483647) {
      tmp = 2147483647;
    } else if (a < -2147483648) {
      tmp = -2147483648;
    } else {
      // Inline function 'kotlin.js.jsBitwiseOr' call
      tmp = a | 0;
    }
    return tmp;
  }
  function isArrayish(o) {
    return isJsArray(o) || isView(o);
  }
  function isJsArray(obj) {
    // Inline function 'kotlin.js.unsafeCast' call
    return Array.isArray(obj);
  }
  function isInterface(obj, iface) {
    return isInterfaceImpl(obj, iface.$metadata$.iid);
  }
  function isInterfaceImpl(obj, iface) {
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_elvis_lhs = obj.$imask$;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var mask = tmp;
    return isBitSet(mask, iface);
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = !obj.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isCharSequence(value) {
    return typeof value === 'string' || isInterface(value, CharSequence);
  }
  function isBooleanArray(a) {
    return isJsArray(a) && a.$type$ === 'BooleanArray';
  }
  function isByteArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Int8Array;
  }
  function isShortArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Int16Array;
  }
  function isCharArray(a) {
    var tmp;
    // Inline function 'kotlin.js.jsInstanceOf' call
    if (a instanceof Uint16Array) {
      tmp = a.$type$ === 'CharArray';
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isIntArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Int32Array;
  }
  function isFloatArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Float32Array;
  }
  function isLongArray(a) {
    return isJsArray(a) && a.$type$ === 'LongArray';
  }
  function isDoubleArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Float64Array;
  }
  function calculateErrorInfo(proto) {
    var tmp0_safe_receiver = proto.constructor;
    var metadata = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.$metadata$;
    var tmp2_safe_receiver = metadata == null ? null : metadata.errorInfo;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp2_safe_receiver;
    }
    var result = 0;
    if (hasProp(proto, 'message'))
      result = result | 1;
    if (hasProp(proto, 'cause'))
      result = result | 2;
    if (!(result === 3)) {
      var parentProto = getPrototypeOf(proto);
      if (parentProto != Error.prototype) {
        result = result | calculateErrorInfo(parentProto);
      }
    }
    if (!(metadata == null)) {
      metadata.errorInfo = result;
    }
    return result;
  }
  function hasProp(proto, propName) {
    return proto.hasOwnProperty(propName);
  }
  function getPrototypeOf(obj) {
    return Object.getPrototypeOf(obj);
  }
  function get_VOID() {
    _init_properties_void_kt__3zg9as();
    return VOID;
  }
  var VOID;
  var properties_initialized_void_kt_e4ret2;
  function _init_properties_void_kt__3zg9as() {
    if (!properties_initialized_void_kt_e4ret2) {
      properties_initialized_void_kt_e4ret2 = true;
      VOID = void 0;
    }
  }
  function copyOf(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.require' call
    if (!(newSize >= 0)) {
      // Inline function 'kotlin.collections.copyOf.<anonymous>' call
      var message = 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    return fillFrom(_this__u8e3s4, new Int32Array(newSize));
  }
  function copyOf_0(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.require' call
    if (!(newSize >= 0)) {
      // Inline function 'kotlin.collections.copyOf.<anonymous>' call
      var message = 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    return arrayCopyResize(_this__u8e3s4, newSize, null);
  }
  function isNaN_0(_this__u8e3s4) {
    return !(_this__u8e3s4 === _this__u8e3s4);
  }
  function takeHighestOneBit(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 === 0) {
      tmp = 0;
    } else {
      // Inline function 'kotlin.countLeadingZeroBits' call
      tmp = 1 << (31 - clz32(_this__u8e3s4) | 0);
    }
    return tmp;
  }
  function Unit() {
  }
  protoOf(Unit).toString = function () {
    return 'kotlin.Unit';
  };
  var Unit_instance;
  function Unit_getInstance() {
    return Unit_instance;
  }
  function collectionToArray(collection) {
    return collectionToArrayCommonImpl(collection);
  }
  function terminateCollectionToArray(collectionSize, array) {
    return array;
  }
  function arrayOfNulls(reference, size) {
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fillArrayVal(Array(size), null);
  }
  function copyToArray(collection) {
    var tmp;
    // Inline function 'kotlin.js.asDynamic' call
    if (collection.toArray !== undefined) {
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = collection.toArray();
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = collectionToArray(collection);
    }
    return tmp;
  }
  function arrayCopy(source, destination, destinationOffset, startIndex, endIndex) {
    Companion_instance_3.g1(startIndex, endIndex, source.length);
    var rangeSize = endIndex - startIndex | 0;
    Companion_instance_3.g1(destinationOffset, destinationOffset + rangeSize | 0, destination.length);
    if (isView(destination) && isView(source)) {
      // Inline function 'kotlin.js.asDynamic' call
      var subrange = source.subarray(startIndex, endIndex);
      // Inline function 'kotlin.js.asDynamic' call
      destination.set(subrange, destinationOffset);
    } else {
      if (!(source === destination) || destinationOffset <= startIndex) {
        var inductionVariable = 0;
        if (inductionVariable < rangeSize)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            destination[destinationOffset + index | 0] = source[startIndex + index | 0];
          }
           while (inductionVariable < rangeSize);
      } else {
        var inductionVariable_0 = rangeSize - 1 | 0;
        if (0 <= inductionVariable_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + -1 | 0;
            destination[destinationOffset + index_0 | 0] = source[startIndex + index_0 | 0];
          }
           while (0 <= inductionVariable_0);
      }
    }
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  protoOf(AbstractMutableCollection).toJSON = function () {
    return this.toArray();
  };
  protoOf(AbstractMutableCollection).i1 = function () {
  };
  function IteratorImpl($outer) {
    this.l1_1 = $outer;
    this.j1_1 = 0;
    this.k1_1 = -1;
  }
  protoOf(IteratorImpl).d = function () {
    return this.j1_1 < this.l1_1.f();
  };
  protoOf(IteratorImpl).e = function () {
    if (!this.d())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var _unary__edvuaz = this.j1_1;
    this.j1_1 = _unary__edvuaz + 1 | 0;
    tmp.k1_1 = _unary__edvuaz;
    return this.l1_1.i(this.k1_1);
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this.m1_1 = 0;
  }
  protoOf(AbstractMutableList).h1 = function (element) {
    this.i1();
    this.n1(this.f(), element);
    return true;
  };
  protoOf(AbstractMutableList).c = function () {
    return new IteratorImpl(this);
  };
  protoOf(AbstractMutableList).h = function (element) {
    return this.p1(element) >= 0;
  };
  protoOf(AbstractMutableList).p1 = function (element) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var index = 0;
      var _iterator__ex2g4s = this.c();
      while (_iterator__ex2g4s.d()) {
        var item = _iterator__ex2g4s.e();
        // Inline function 'kotlin.collections.AbstractMutableList.indexOf.<anonymous>' call
        if (equals(item, element)) {
          tmp$ret$1 = index;
          break $l$block;
        }
        index = index + 1 | 0;
      }
      tmp$ret$1 = -1;
    }
    return tmp$ret$1;
  };
  protoOf(AbstractMutableList).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, KtList) : false))
      return false;
    return Companion_instance_3.q1(this, other);
  };
  protoOf(AbstractMutableList).hashCode = function () {
    return Companion_instance_3.r1(this);
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  protoOf(AbstractMutableSet).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, KtSet) : false))
      return false;
    return Companion_instance_4.s1(this, other);
  };
  protoOf(AbstractMutableSet).hashCode = function () {
    return Companion_instance_4.t1(this);
  };
  function arrayOfUninitializedElements(capacity) {
    // Inline function 'kotlin.require' call
    if (!(capacity >= 0)) {
      // Inline function 'kotlin.collections.arrayOfUninitializedElements.<anonymous>' call
      var message = 'capacity must be non-negative.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fillArrayVal(Array(capacity), null);
  }
  function resetRange(_this__u8e3s4, fromIndex, toIndex) {
    // Inline function 'kotlin.js.nativeFill' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.fill(null, fromIndex, toIndex);
  }
  function copyOfUninitializedElements(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return copyOf_0(_this__u8e3s4, newSize);
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = ArrayList_init_$Create$_0(0);
    // Inline function 'kotlin.collections.Companion.Empty.<anonymous>' call
    this_0.w1_1 = true;
    tmp.x1_1 = this_0;
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ArrayList_init_$Init$($this) {
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$() {
    return ArrayList_init_$Init$(objectCreate(protoOf(ArrayList)));
  }
  function ArrayList_init_$Init$_0(initialCapacity, $this) {
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    ArrayList.call($this, tmp$ret$0);
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'kotlin.collections.ArrayList.<init>.<anonymous>' call
      var message = 'Negative initial capacity: ' + initialCapacity;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    return $this;
  }
  function ArrayList_init_$Create$_0(initialCapacity) {
    return ArrayList_init_$Init$_0(initialCapacity, objectCreate(protoOf(ArrayList)));
  }
  function ArrayList_init_$Init$_1(elements, $this) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(elements);
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_1(elements) {
    return ArrayList_init_$Init$_1(elements, objectCreate(protoOf(ArrayList)));
  }
  function rangeCheck($this, index) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.ArrayList.rangeCheck.<anonymous>' call
    Companion_instance_3.y1(index, $this.f());
    return index;
  }
  function insertionRangeCheck($this, index) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.ArrayList.insertionRangeCheck.<anonymous>' call
    Companion_instance_3.z1(index, $this.f());
    return index;
  }
  function ArrayList(array) {
    Companion_getInstance_1();
    AbstractMutableList.call(this);
    this.v1_1 = array;
    this.w1_1 = false;
  }
  protoOf(ArrayList).f = function () {
    return this.v1_1.length;
  };
  protoOf(ArrayList).i = function (index) {
    var tmp = this.v1_1[rangeCheck(this, index)];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ArrayList).h1 = function (element) {
    this.i1();
    // Inline function 'kotlin.js.asDynamic' call
    this.v1_1.push(element);
    this.m1_1 = this.m1_1 + 1 | 0;
    return true;
  };
  protoOf(ArrayList).n1 = function (index, element) {
    this.i1();
    // Inline function 'kotlin.js.asDynamic' call
    this.v1_1.splice(insertionRangeCheck(this, index), 0, element);
    this.m1_1 = this.m1_1 + 1 | 0;
  };
  protoOf(ArrayList).o1 = function (index) {
    this.i1();
    rangeCheck(this, index);
    this.m1_1 = this.m1_1 + 1 | 0;
    var tmp;
    if (index === get_lastIndex_0(this)) {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = this.v1_1.pop();
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = this.v1_1.splice(index, 1)[0];
    }
    return tmp;
  };
  protoOf(ArrayList).p1 = function (element) {
    return indexOf(this.v1_1, element);
  };
  protoOf(ArrayList).toString = function () {
    return arrayToString(this.v1_1);
  };
  protoOf(ArrayList).a2 = function () {
    return [].slice.call(this.v1_1);
  };
  protoOf(ArrayList).toArray = function () {
    return this.a2();
  };
  protoOf(ArrayList).i1 = function () {
    if (this.w1_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  function HashSet_init_$Init$(map, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.b2_1 = map;
    return $this;
  }
  function HashSet_init_$Init$_0($this) {
    HashSet_init_$Init$(InternalHashMap_init_$Create$(), $this);
    return $this;
  }
  function HashSet_init_$Create$() {
    return HashSet_init_$Init$_0(objectCreate(protoOf(HashSet)));
  }
  function HashSet_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashSet_init_$Init$(InternalHashMap_init_$Create$_0(initialCapacity, loadFactor), $this);
    return $this;
  }
  function HashSet_init_$Init$_2(initialCapacity, $this) {
    HashSet_init_$Init$_1(initialCapacity, 1.0, $this);
    return $this;
  }
  function HashSet_init_$Create$_0(initialCapacity) {
    return HashSet_init_$Init$_2(initialCapacity, objectCreate(protoOf(HashSet)));
  }
  protoOf(HashSet).h1 = function (element) {
    return this.b2_1.c2(element, true) == null;
  };
  protoOf(HashSet).h = function (element) {
    return this.b2_1.d2(element);
  };
  protoOf(HashSet).g = function () {
    return this.b2_1.f() === 0;
  };
  protoOf(HashSet).c = function () {
    return this.b2_1.e2();
  };
  protoOf(HashSet).f = function () {
    return this.b2_1.f();
  };
  function HashSet() {
  }
  function computeHashSize($this, capacity) {
    return takeHighestOneBit(imul(coerceAtLeast(capacity, 1), 3));
  }
  function computeShift($this, hashSize) {
    // Inline function 'kotlin.countLeadingZeroBits' call
    return clz32(hashSize) + 1 | 0;
  }
  function checkForComodification($this) {
    if (!($this.p2_1.m2_1 === $this.r2_1))
      throw ConcurrentModificationException_init_$Create$_0('The backing map has been modified after this entry was obtained.');
  }
  function InternalHashMap_init_$Init$($this) {
    InternalHashMap_init_$Init$_0(8, $this);
    return $this;
  }
  function InternalHashMap_init_$Create$() {
    return InternalHashMap_init_$Init$(objectCreate(protoOf(InternalHashMap)));
  }
  function InternalHashMap_init_$Init$_0(initialCapacity, $this) {
    InternalHashMap.call($this, arrayOfUninitializedElements(initialCapacity), null, new Int32Array(initialCapacity), new Int32Array(computeHashSize(Companion_instance_2, initialCapacity)), 2, 0);
    return $this;
  }
  function InternalHashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    InternalHashMap_init_$Init$_0(initialCapacity, $this);
    // Inline function 'kotlin.require' call
    if (!(loadFactor > 0)) {
      // Inline function 'kotlin.collections.InternalHashMap.<init>.<anonymous>' call
      var message = 'Non-positive load factor: ' + loadFactor;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    return $this;
  }
  function InternalHashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return InternalHashMap_init_$Init$_1(initialCapacity, loadFactor, objectCreate(protoOf(InternalHashMap)));
  }
  function _get_capacity__a9k9f3($this) {
    return $this.f2_1.length;
  }
  function _get_hashSize__tftcho($this) {
    return $this.i2_1.length;
  }
  function registerModification($this) {
    $this.m2_1 = $this.m2_1 + 1 | 0;
  }
  function ensureExtraCapacity($this, n) {
    if (shouldCompact($this, n)) {
      compact($this, true);
    } else {
      ensureCapacity($this, $this.k2_1 + n | 0);
    }
  }
  function shouldCompact($this, extraCapacity) {
    var spareCapacity = _get_capacity__a9k9f3($this) - $this.k2_1 | 0;
    var gaps = $this.k2_1 - $this.f() | 0;
    return spareCapacity < extraCapacity && (gaps + spareCapacity | 0) >= extraCapacity && gaps >= (_get_capacity__a9k9f3($this) / 4 | 0);
  }
  function ensureCapacity($this, minCapacity) {
    if (minCapacity < 0)
      throw RuntimeException_init_$Create$_0('too many elements');
    if (minCapacity > _get_capacity__a9k9f3($this)) {
      var newSize = Companion_instance_3.s2(_get_capacity__a9k9f3($this), minCapacity);
      $this.f2_1 = copyOfUninitializedElements($this.f2_1, newSize);
      var tmp = $this;
      var tmp0_safe_receiver = $this.g2_1;
      tmp.g2_1 = tmp0_safe_receiver == null ? null : copyOfUninitializedElements(tmp0_safe_receiver, newSize);
      $this.h2_1 = copyOf($this.h2_1, newSize);
      var newHashSize = computeHashSize(Companion_instance_2, newSize);
      if (newHashSize > _get_hashSize__tftcho($this)) {
        rehash($this, newHashSize);
      }
    }
  }
  function allocateValuesArray($this) {
    var curValuesArray = $this.g2_1;
    if (!(curValuesArray == null))
      return curValuesArray;
    var newValuesArray = arrayOfUninitializedElements(_get_capacity__a9k9f3($this));
    $this.g2_1 = newValuesArray;
    return newValuesArray;
  }
  function hash($this, key) {
    return key == null ? 0 : imul(hashCode(key), -1640531527) >>> $this.l2_1 | 0;
  }
  function compact($this, updateHashArray) {
    var i = 0;
    var j = 0;
    var valuesArray = $this.g2_1;
    while (i < $this.k2_1) {
      var hash = $this.h2_1[i];
      if (hash >= 0) {
        $this.f2_1[j] = $this.f2_1[i];
        if (!(valuesArray == null)) {
          valuesArray[j] = valuesArray[i];
        }
        if (updateHashArray) {
          $this.h2_1[j] = hash;
          $this.i2_1[hash] = j + 1 | 0;
        }
        j = j + 1 | 0;
      }
      i = i + 1 | 0;
    }
    resetRange($this.f2_1, j, $this.k2_1);
    if (valuesArray == null)
      null;
    else {
      resetRange(valuesArray, j, $this.k2_1);
    }
    $this.k2_1 = j;
  }
  function rehash($this, newHashSize) {
    registerModification($this);
    if ($this.k2_1 > $this.n2_1) {
      compact($this, false);
    }
    $this.i2_1 = new Int32Array(newHashSize);
    $this.l2_1 = computeShift(Companion_instance_2, newHashSize);
    var i = 0;
    while (i < $this.k2_1) {
      var _unary__edvuaz = i;
      i = _unary__edvuaz + 1 | 0;
      if (!putRehash($this, _unary__edvuaz)) {
        throw IllegalStateException_init_$Create$_0('This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?');
      }
    }
  }
  function putRehash($this, i) {
    var hash_0 = hash($this, $this.f2_1[i]);
    var probesLeft = $this.j2_1;
    while (true) {
      var index = $this.i2_1[hash_0];
      if (index === 0) {
        $this.i2_1[hash_0] = i + 1 | 0;
        $this.h2_1[i] = hash_0;
        return true;
      }
      probesLeft = probesLeft - 1 | 0;
      if (probesLeft < 0)
        return false;
      var _unary__edvuaz = hash_0;
      hash_0 = _unary__edvuaz - 1 | 0;
      if (_unary__edvuaz === 0)
        hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
    }
  }
  function findKey($this, key) {
    var hash_0 = hash($this, key);
    var probesLeft = $this.j2_1;
    while (true) {
      var index = $this.i2_1[hash_0];
      if (index === 0)
        return -1;
      if (index > 0 && equals($this.f2_1[index - 1 | 0], key))
        return index - 1 | 0;
      probesLeft = probesLeft - 1 | 0;
      if (probesLeft < 0)
        return -1;
      var _unary__edvuaz = hash_0;
      hash_0 = _unary__edvuaz - 1 | 0;
      if (_unary__edvuaz === 0)
        hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
    }
  }
  function addKey($this, key) {
    $this.t2();
    retry: while (true) {
      var hash_0 = hash($this, key);
      var tentativeMaxProbeDistance = coerceAtMost(imul($this.j2_1, 2), _get_hashSize__tftcho($this) / 2 | 0);
      var probeDistance = 0;
      while (true) {
        var index = $this.i2_1[hash_0];
        if (index <= 0) {
          if ($this.k2_1 >= _get_capacity__a9k9f3($this)) {
            ensureExtraCapacity($this, 1);
            continue retry;
          }
          var _unary__edvuaz = $this.k2_1;
          $this.k2_1 = _unary__edvuaz + 1 | 0;
          var putIndex = _unary__edvuaz;
          $this.f2_1[putIndex] = key;
          $this.h2_1[putIndex] = hash_0;
          $this.i2_1[hash_0] = putIndex + 1 | 0;
          $this.n2_1 = $this.n2_1 + 1 | 0;
          registerModification($this);
          if (probeDistance > $this.j2_1)
            $this.j2_1 = probeDistance;
          return putIndex;
        }
        if (equals($this.f2_1[index - 1 | 0], key)) {
          return -index | 0;
        }
        probeDistance = probeDistance + 1 | 0;
        if (probeDistance > tentativeMaxProbeDistance) {
          rehash($this, imul(_get_hashSize__tftcho($this), 2));
          continue retry;
        }
        var _unary__edvuaz_0 = hash_0;
        hash_0 = _unary__edvuaz_0 - 1 | 0;
        if (_unary__edvuaz_0 === 0)
          hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
      }
    }
  }
  function contentEquals($this, other) {
    return $this.n2_1 === other.f() && $this.u2(other.m());
  }
  function Companion_2() {
    this.v2_1 = -1640531527;
    this.w2_1 = 8;
    this.x2_1 = 2;
    this.y2_1 = -1;
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function Itr(map) {
    this.z2_1 = map;
    this.a3_1 = 0;
    this.b3_1 = -1;
    this.c3_1 = this.z2_1.m2_1;
    this.d3();
  }
  protoOf(Itr).d3 = function () {
    while (this.a3_1 < this.z2_1.k2_1 && this.z2_1.h2_1[this.a3_1] < 0) {
      this.a3_1 = this.a3_1 + 1 | 0;
    }
  };
  protoOf(Itr).d = function () {
    return this.a3_1 < this.z2_1.k2_1;
  };
  protoOf(Itr).e3 = function () {
    if (!(this.z2_1.m2_1 === this.c3_1))
      throw ConcurrentModificationException_init_$Create$();
  };
  function KeysItr(map) {
    Itr.call(this, map);
  }
  protoOf(KeysItr).e = function () {
    this.e3();
    if (this.a3_1 >= this.z2_1.k2_1)
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var _unary__edvuaz = this.a3_1;
    this.a3_1 = _unary__edvuaz + 1 | 0;
    tmp.b3_1 = _unary__edvuaz;
    var result = this.z2_1.f2_1[this.b3_1];
    this.d3();
    return result;
  };
  function EntriesItr(map) {
    Itr.call(this, map);
  }
  protoOf(EntriesItr).e = function () {
    this.e3();
    if (this.a3_1 >= this.z2_1.k2_1)
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var _unary__edvuaz = this.a3_1;
    this.a3_1 = _unary__edvuaz + 1 | 0;
    tmp.b3_1 = _unary__edvuaz;
    var result = new EntryRef(this.z2_1, this.b3_1);
    this.d3();
    return result;
  };
  protoOf(EntriesItr).n3 = function () {
    if (this.a3_1 >= this.z2_1.k2_1)
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var _unary__edvuaz = this.a3_1;
    this.a3_1 = _unary__edvuaz + 1 | 0;
    tmp.b3_1 = _unary__edvuaz;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.z2_1.f2_1[this.b3_1];
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp_0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = ensureNotNull(this.z2_1.g2_1)[this.b3_1];
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var result = tmp_0 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
    this.d3();
    return result;
  };
  protoOf(EntriesItr).o3 = function (sb) {
    if (this.a3_1 >= this.z2_1.k2_1)
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var _unary__edvuaz = this.a3_1;
    this.a3_1 = _unary__edvuaz + 1 | 0;
    tmp.b3_1 = _unary__edvuaz;
    var key = this.z2_1.f2_1[this.b3_1];
    if (equals(key, this.z2_1))
      sb.r3('(this Map)');
    else
      sb.q3(key);
    sb.s3(_Char___init__impl__6a9atx(61));
    var value = ensureNotNull(this.z2_1.g2_1)[this.b3_1];
    if (equals(value, this.z2_1))
      sb.r3('(this Map)');
    else
      sb.q3(value);
    this.d3();
  };
  function EntryRef(map, index) {
    this.p2_1 = map;
    this.q2_1 = index;
    this.r2_1 = this.p2_1.m2_1;
  }
  protoOf(EntryRef).k = function () {
    checkForComodification(this);
    return this.p2_1.f2_1[this.q2_1];
  };
  protoOf(EntryRef).l = function () {
    checkForComodification(this);
    return ensureNotNull(this.p2_1.g2_1)[this.q2_1];
  };
  protoOf(EntryRef).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Entry) : false) {
      tmp_0 = equals(other.k(), this.k());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.l(), this.l());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EntryRef).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.k();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.l();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(EntryRef).toString = function () {
    return toString_0(this.k()) + '=' + toString_0(this.l());
  };
  function InternalHashMap(keysArray, valuesArray, presenceArray, hashArray, maxProbeDistance, length) {
    this.f2_1 = keysArray;
    this.g2_1 = valuesArray;
    this.h2_1 = presenceArray;
    this.i2_1 = hashArray;
    this.j2_1 = maxProbeDistance;
    this.k2_1 = length;
    this.l2_1 = computeShift(Companion_instance_2, _get_hashSize__tftcho(this));
    this.m2_1 = 0;
    this.n2_1 = 0;
    this.o2_1 = false;
  }
  protoOf(InternalHashMap).f = function () {
    return this.n2_1;
  };
  protoOf(InternalHashMap).d2 = function (key) {
    return findKey(this, key) >= 0;
  };
  protoOf(InternalHashMap).c2 = function (key, value) {
    var index = addKey(this, key);
    var valuesArray = allocateValuesArray(this);
    if (index < 0) {
      var oldValue = valuesArray[(-index | 0) - 1 | 0];
      valuesArray[(-index | 0) - 1 | 0] = value;
      return oldValue;
    } else {
      valuesArray[index] = value;
      return null;
    }
  };
  protoOf(InternalHashMap).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      if (!(other == null) ? isInterface(other, KtMap) : false) {
        tmp_0 = contentEquals(this, other);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(InternalHashMap).hashCode = function () {
    var result = 0;
    var it = this.t3();
    while (it.d()) {
      result = result + it.n3() | 0;
    }
    return result;
  };
  protoOf(InternalHashMap).toString = function () {
    var sb = StringBuilder_init_$Create$(2 + imul(this.n2_1, 3) | 0);
    sb.r3('{');
    var i = 0;
    var it = this.t3();
    while (it.d()) {
      if (i > 0) {
        sb.r3(', ');
      }
      it.o3(sb);
      i = i + 1 | 0;
    }
    sb.r3('}');
    return sb.toString();
  };
  protoOf(InternalHashMap).t2 = function () {
    if (this.o2_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(InternalHashMap).u3 = function (entry) {
    var index = findKey(this, entry.k());
    if (index < 0)
      return false;
    return equals(ensureNotNull(this.g2_1)[index], entry.l());
  };
  protoOf(InternalHashMap).v3 = function (entry) {
    return this.u3(isInterface(entry, Entry) ? entry : THROW_CCE());
  };
  protoOf(InternalHashMap).e2 = function () {
    return new KeysItr(this);
  };
  protoOf(InternalHashMap).t3 = function () {
    return new EntriesItr(this);
  };
  function InternalMap() {
  }
  function LinkedHashSet_init_$Init$($this) {
    HashSet_init_$Init$_0($this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Create$() {
    return LinkedHashSet_init_$Init$(objectCreate(protoOf(LinkedHashSet)));
  }
  function LinkedHashSet() {
  }
  function CoroutineImpl(resultContinuation) {
    InterceptedCoroutine.call(this);
    this.x3_1 = resultContinuation;
    this.y3_1 = 0;
    this.z3_1 = 0;
    this.a4_1 = null;
    this.b4_1 = null;
    this.c4_1 = null;
    var tmp = this;
    var tmp0_safe_receiver = this.x3_1;
    tmp.d4_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e4();
  }
  protoOf(CoroutineImpl).e4 = function () {
    return ensureNotNull(this.d4_1);
  };
  protoOf(CoroutineImpl).f4 = function (result) {
    var current = this;
    // Inline function 'kotlin.Result.getOrNull' call
    var tmp;
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      tmp = null;
    } else {
      var tmp_0 = _Result___get_value__impl__bjfvqg(result);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    var currentResult = tmp;
    var currentException = Result__exceptionOrNull_impl_p6xea9(result);
    while (true) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.coroutines.CoroutineImpl.resumeWith.<anonymous>' call
      var $this$with = current;
      if (currentException == null) {
        $this$with.a4_1 = currentResult;
      } else {
        $this$with.y3_1 = $this$with.z3_1;
        $this$with.b4_1 = currentException;
      }
      try {
        var outcome = $this$with.g4();
        if (outcome === get_COROUTINE_SUSPENDED())
          return Unit_instance;
        currentResult = outcome;
        currentException = null;
      } catch ($p) {
        var exception = $p;
        currentResult = null;
        // Inline function 'kotlin.js.unsafeCast' call
        currentException = exception;
      }
      $this$with.i4();
      var completion = ensureNotNull($this$with.x3_1);
      if (completion instanceof CoroutineImpl) {
        current = completion;
      } else {
        if (!(currentException == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var exception_0 = ensureNotNull(currentException);
          var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception_0));
          completion.j4(tmp$ret$2);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = currentResult;
          var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
          completion.j4(tmp$ret$4);
        }
        return Unit_instance;
      }
    }
  };
  protoOf(CoroutineImpl).j4 = function (result) {
    return this.f4(result);
  };
  function CompletedContinuation() {
  }
  protoOf(CompletedContinuation).e4 = function () {
    var message = 'This continuation is already complete';
    throw IllegalStateException_init_$Create$_0(toString_1(message));
  };
  protoOf(CompletedContinuation).f4 = function (result) {
    // Inline function 'kotlin.error' call
    var message = 'This continuation is already complete';
    throw IllegalStateException_init_$Create$_0(toString_1(message));
  };
  protoOf(CompletedContinuation).j4 = function (result) {
    return this.f4(result);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'This continuation is already complete';
  };
  var CompletedContinuation_instance;
  function CompletedContinuation_getInstance() {
    return CompletedContinuation_instance;
  }
  function InterceptedCoroutine() {
    this.h4_1 = null;
  }
  protoOf(InterceptedCoroutine).k4 = function () {
    var tmp0_elvis_lhs = this.h4_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp1_safe_receiver = this.e4().l4(Key_instance);
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.m4(this);
      // Inline function 'kotlin.also' call
      var this_0 = tmp2_elvis_lhs == null ? this : tmp2_elvis_lhs;
      // Inline function 'kotlin.coroutines.InterceptedCoroutine.intercepted.<anonymous>' call
      this.h4_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(InterceptedCoroutine).i4 = function () {
    var intercepted = this.h4_1;
    if (!(intercepted == null) && !(intercepted === this)) {
      ensureNotNull(this.e4().l4(Key_instance)).n4(intercepted);
    }
    this.h4_1 = CompletedContinuation_instance;
  };
  function CancellationException_init_$Init$($this) {
    IllegalStateException_init_$Init$($this);
    CancellationException.call($this);
    return $this;
  }
  function CancellationException_init_$Create$() {
    var tmp = CancellationException_init_$Init$(objectCreate(protoOf(CancellationException)));
    captureStack(tmp, CancellationException_init_$Create$);
    return tmp;
  }
  function CancellationException_init_$Init$_0(message, $this) {
    IllegalStateException_init_$Init$_0(message, $this);
    CancellationException.call($this);
    return $this;
  }
  function CancellationException_init_$Create$_0(message) {
    var tmp = CancellationException_init_$Init$_0(message, objectCreate(protoOf(CancellationException)));
    captureStack(tmp, CancellationException_init_$Create$_0);
    return tmp;
  }
  function CancellationException_init_$Init$_1(message, cause, $this) {
    IllegalStateException_init_$Init$_1(message, cause, $this);
    CancellationException.call($this);
    return $this;
  }
  function CancellationException() {
    captureStack(this, CancellationException);
  }
  function intercepted(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof InterceptedCoroutine ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k4();
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function createCoroutineUnintercepted(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlin.coroutines.intrinsics.createCoroutineFromSuspendFunction' call
    return new createCoroutineUnintercepted$$inlined$createCoroutineFromSuspendFunction$1(completion, _this__u8e3s4, receiver, completion);
  }
  function invokeSuspendSuperTypeWithReceiver(_this__u8e3s4, receiver, completion) {
    throw new NotImplementedError('It is intrinsic method');
  }
  function startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, receiver, completion) {
    var tmp;
    if (!(completion instanceof InterceptedCoroutine)) {
      tmp = createSimpleCoroutineForSuspendFunction(completion);
    } else {
      tmp = completion;
    }
    var wrappedCompletion = tmp;
    // Inline function 'kotlin.js.asDynamic' call
    var a = _this__u8e3s4;
    return typeof a === 'function' ? a(receiver, wrappedCompletion) : _this__u8e3s4.q4(receiver, wrappedCompletion);
  }
  function createSimpleCoroutineForSuspendFunction(completion) {
    return new createSimpleCoroutineForSuspendFunction$1(completion);
  }
  function createCoroutineUnintercepted$$inlined$createCoroutineFromSuspendFunction$1($completion, $this_createCoroutineUnintercepted, $receiver, $completion$1) {
    this.z4_1 = $this_createCoroutineUnintercepted;
    this.a5_1 = $receiver;
    this.b5_1 = $completion$1;
    CoroutineImpl.call(this, isInterface($completion, Continuation) ? $completion : THROW_CCE());
  }
  protoOf(createCoroutineUnintercepted$$inlined$createCoroutineFromSuspendFunction$1).g4 = function () {
    if (this.b4_1 != null)
      throw this.b4_1;
    // Inline function 'kotlin.coroutines.intrinsics.createCoroutineUnintercepted.<anonymous>' call
    // Inline function 'kotlin.js.asDynamic' call
    var a = this.z4_1;
    return typeof a === 'function' ? a(this.a5_1, this.b5_1) : this.z4_1.q4(this.a5_1, this.b5_1);
  };
  function createSimpleCoroutineForSuspendFunction$1($completion) {
    CoroutineImpl.call(this, isInterface($completion, Continuation) ? $completion : THROW_CCE());
  }
  protoOf(createSimpleCoroutineForSuspendFunction$1).g4 = function () {
    if (this.b4_1 != null)
      throw this.b4_1;
    return this.a4_1;
  };
  function get_EmptyContinuation() {
    _init_properties_EmptyContinuation_kt__o181ce();
    return EmptyContinuation;
  }
  var EmptyContinuation;
  function EmptyContinuation$$inlined$Continuation$1($context) {
    this.k5_1 = $context;
  }
  protoOf(EmptyContinuation$$inlined$Continuation$1).e4 = function () {
    return this.k5_1;
  };
  protoOf(EmptyContinuation$$inlined$Continuation$1).f4 = function (result) {
    // Inline function 'kotlin.getOrThrow' call
    throwOnFailure(result);
    var tmp = _Result___get_value__impl__bjfvqg(result);
    (tmp == null ? true : !(tmp == null)) || THROW_CCE();
    return Unit_instance;
  };
  protoOf(EmptyContinuation$$inlined$Continuation$1).j4 = function (result) {
    return this.f4(result);
  };
  var properties_initialized_EmptyContinuation_kt_4jdb9w;
  function _init_properties_EmptyContinuation_kt__o181ce() {
    if (!properties_initialized_EmptyContinuation_kt_4jdb9w) {
      properties_initialized_EmptyContinuation_kt_4jdb9w = true;
      // Inline function 'kotlin.coroutines.Continuation' call
      var context = EmptyCoroutineContext_getInstance();
      EmptyContinuation = new EmptyContinuation$$inlined$Continuation$1(context);
    }
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$() {
    var tmp = Exception_init_$Init$(objectCreate(protoOf(Exception)));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$_0(message) {
    var tmp = Exception_init_$Init$_0(message, objectCreate(protoOf(Exception)));
    captureStack(tmp, Exception_init_$Create$_0);
    return tmp;
  }
  function Exception_init_$Init$_1(message, cause, $this) {
    extendThrowable($this, message, cause);
    Exception.call($this);
    return $this;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  function IllegalArgumentException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$() {
    var tmp = IllegalArgumentException_init_$Init$(objectCreate(protoOf(IllegalArgumentException)));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$_0(message) {
    var tmp = IllegalArgumentException_init_$Init$_0(message, objectCreate(protoOf(IllegalArgumentException)));
    captureStack(tmp, IllegalArgumentException_init_$Create$_0);
    return tmp;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  function IllegalStateException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$() {
    var tmp = IllegalStateException_init_$Init$(objectCreate(protoOf(IllegalStateException)));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_0(message) {
    var tmp = IllegalStateException_init_$Init$_0(message, objectCreate(protoOf(IllegalStateException)));
    captureStack(tmp, IllegalStateException_init_$Create$_0);
    return tmp;
  }
  function IllegalStateException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_1(message, cause) {
    var tmp = IllegalStateException_init_$Init$_1(message, cause, objectCreate(protoOf(IllegalStateException)));
    captureStack(tmp, IllegalStateException_init_$Create$_1);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(objectCreate(protoOf(UnsupportedOperationException)));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, objectCreate(protoOf(UnsupportedOperationException)));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$() {
    var tmp = RuntimeException_init_$Init$(objectCreate(protoOf(RuntimeException)));
    captureStack(tmp, RuntimeException_init_$Create$);
    return tmp;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$_0(message) {
    var tmp = RuntimeException_init_$Init$_0(message, objectCreate(protoOf(RuntimeException)));
    captureStack(tmp, RuntimeException_init_$Create$_0);
    return tmp;
  }
  function RuntimeException_init_$Init$_1(message, cause, $this) {
    Exception_init_$Init$_1(message, cause, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$_1(message, cause) {
    var tmp = RuntimeException_init_$Init$_1(message, cause, objectCreate(protoOf(RuntimeException)));
    captureStack(tmp, RuntimeException_init_$Create$_1);
    return tmp;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(objectCreate(protoOf(NoSuchElementException)));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(message, objectCreate(protoOf(NoSuchElementException)));
    captureStack(tmp, NoSuchElementException_init_$Create$_0);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  function Error_init_$Init$($this) {
    extendThrowable($this);
    Error_0.call($this);
    return $this;
  }
  function Error_init_$Create$() {
    var tmp = Error_init_$Init$(objectCreate(protoOf(Error_0)));
    captureStack(tmp, Error_init_$Create$);
    return tmp;
  }
  function Error_init_$Init$_0(message, $this) {
    extendThrowable($this, message);
    Error_0.call($this);
    return $this;
  }
  function Error_init_$Init$_1(message, cause, $this) {
    extendThrowable($this, message, cause);
    Error_0.call($this);
    return $this;
  }
  function Error_0() {
    captureStack(this, Error_0);
  }
  function IndexOutOfBoundsException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$() {
    var tmp = IndexOutOfBoundsException_init_$Init$(objectCreate(protoOf(IndexOutOfBoundsException)));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$_0(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$_0(message, objectCreate(protoOf(IndexOutOfBoundsException)));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$_0);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  function ConcurrentModificationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ConcurrentModificationException.call($this);
    return $this;
  }
  function ConcurrentModificationException_init_$Create$() {
    var tmp = ConcurrentModificationException_init_$Init$(objectCreate(protoOf(ConcurrentModificationException)));
    captureStack(tmp, ConcurrentModificationException_init_$Create$);
    return tmp;
  }
  function ConcurrentModificationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    ConcurrentModificationException.call($this);
    return $this;
  }
  function ConcurrentModificationException_init_$Create$_0(message) {
    var tmp = ConcurrentModificationException_init_$Init$_0(message, objectCreate(protoOf(ConcurrentModificationException)));
    captureStack(tmp, ConcurrentModificationException_init_$Create$_0);
    return tmp;
  }
  function ConcurrentModificationException() {
    captureStack(this, ConcurrentModificationException);
  }
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(objectCreate(protoOf(NullPointerException)));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  function NoWhenBranchMatchedException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$() {
    var tmp = NoWhenBranchMatchedException_init_$Init$(objectCreate(protoOf(NoWhenBranchMatchedException)));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$);
    return tmp;
  }
  function NoWhenBranchMatchedException() {
    captureStack(this, NoWhenBranchMatchedException);
  }
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(objectCreate(protoOf(ClassCastException)));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  function UninitializedPropertyAccessException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UninitializedPropertyAccessException.call($this);
    return $this;
  }
  function UninitializedPropertyAccessException_init_$Create$() {
    var tmp = UninitializedPropertyAccessException_init_$Init$(objectCreate(protoOf(UninitializedPropertyAccessException)));
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$);
    return tmp;
  }
  function UninitializedPropertyAccessException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UninitializedPropertyAccessException.call($this);
    return $this;
  }
  function UninitializedPropertyAccessException_init_$Create$_0(message) {
    var tmp = UninitializedPropertyAccessException_init_$Init$_0(message, objectCreate(protoOf(UninitializedPropertyAccessException)));
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$_0);
    return tmp;
  }
  function UninitializedPropertyAccessException() {
    captureStack(this, UninitializedPropertyAccessException);
  }
  function fillFrom(src, dst) {
    var srcLen = src.length;
    var dstLen = dst.length;
    var index = 0;
    // Inline function 'kotlin.js.unsafeCast' call
    var arr = dst;
    while (index < srcLen && index < dstLen) {
      var tmp = index;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      arr[tmp] = src[_unary__edvuaz];
    }
    return dst;
  }
  function arrayCopyResize(source, newSize, defaultValue) {
    // Inline function 'kotlin.js.unsafeCast' call
    var result = source.slice(0, newSize);
    // Inline function 'kotlin.copyArrayType' call
    if (source.$type$ !== undefined) {
      result.$type$ = source.$type$;
    }
    var index = source.length;
    if (newSize > index) {
      // Inline function 'kotlin.js.asDynamic' call
      result.length = newSize;
      while (index < newSize) {
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        result[_unary__edvuaz] = defaultValue;
      }
    }
    return result;
  }
  function KClass() {
  }
  function KClassImpl(jClass) {
    this.m5_1 = jClass;
  }
  protoOf(KClassImpl).n5 = function () {
    return this.m5_1;
  };
  protoOf(KClassImpl).equals = function (other) {
    var tmp;
    if (other instanceof NothingKClassImpl) {
      tmp = false;
    } else {
      if (other instanceof ErrorKClass) {
        tmp = false;
      } else {
        if (other instanceof KClassImpl) {
          tmp = equals(this.n5(), other.n5());
        } else {
          tmp = false;
        }
      }
    }
    return tmp;
  };
  protoOf(KClassImpl).hashCode = function () {
    var tmp0_safe_receiver = this.l5();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(KClassImpl).toString = function () {
    return 'class ' + this.l5();
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this.p5_1 = 'Nothing';
  }
  protoOf(NothingKClassImpl).l5 = function () {
    return this.p5_1;
  };
  protoOf(NothingKClassImpl).n5 = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  protoOf(NothingKClassImpl).equals = function (other) {
    return other === this;
  };
  protoOf(NothingKClassImpl).hashCode = function () {
    return 0;
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  protoOf(ErrorKClass).l5 = function () {
    var message = 'Unknown simpleName for ErrorKClass';
    throw IllegalStateException_init_$Create$_0(toString_1(message));
  };
  protoOf(ErrorKClass).equals = function (other) {
    return other === this;
  };
  protoOf(ErrorKClass).hashCode = function () {
    return 0;
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this.r5_1 = givenSimpleName;
    this.s5_1 = isInstanceFunction;
  }
  protoOf(PrimitiveKClassImpl).equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    return protoOf(KClassImpl).equals.call(this, other) && this.r5_1 === other.r5_1;
  };
  protoOf(PrimitiveKClassImpl).l5 = function () {
    return this.r5_1;
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = jClass.$metadata$;
    // Inline function 'kotlin.js.unsafeCast' call
    tmp.u5_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
  }
  protoOf(SimpleKClassImpl).l5 = function () {
    return this.u5_1;
  };
  function get_functionClasses() {
    _init_properties_primitives_kt__3fums4();
    return functionClasses;
  }
  var functionClasses;
  function PrimitiveClasses$anyClass$lambda(it) {
    return !(it == null);
  }
  function PrimitiveClasses$numberClass$lambda(it) {
    return isNumber(it);
  }
  function PrimitiveClasses$booleanClass$lambda(it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  }
  function PrimitiveClasses$byteClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$shortClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$intClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$floatClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$doubleClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$arrayClass$lambda(it) {
    return !(it == null) ? isArray(it) : false;
  }
  function PrimitiveClasses$stringClass$lambda(it) {
    return !(it == null) ? typeof it === 'string' : false;
  }
  function PrimitiveClasses$throwableClass$lambda(it) {
    return it instanceof Error;
  }
  function PrimitiveClasses$booleanArrayClass$lambda(it) {
    return !(it == null) ? isBooleanArray(it) : false;
  }
  function PrimitiveClasses$charArrayClass$lambda(it) {
    return !(it == null) ? isCharArray(it) : false;
  }
  function PrimitiveClasses$byteArrayClass$lambda(it) {
    return !(it == null) ? isByteArray(it) : false;
  }
  function PrimitiveClasses$shortArrayClass$lambda(it) {
    return !(it == null) ? isShortArray(it) : false;
  }
  function PrimitiveClasses$intArrayClass$lambda(it) {
    return !(it == null) ? isIntArray(it) : false;
  }
  function PrimitiveClasses$longArrayClass$lambda(it) {
    return !(it == null) ? isLongArray(it) : false;
  }
  function PrimitiveClasses$floatArrayClass$lambda(it) {
    return !(it == null) ? isFloatArray(it) : false;
  }
  function PrimitiveClasses$doubleArrayClass$lambda(it) {
    return !(it == null) ? isDoubleArray(it) : false;
  }
  function PrimitiveClasses$functionClass$lambda($arity) {
    return function (it) {
      var tmp;
      if (typeof it === 'function') {
        // Inline function 'kotlin.js.asDynamic' call
        tmp = it.length === $arity;
      } else {
        tmp = false;
      }
      return tmp;
    };
  }
  function PrimitiveClasses() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_0 = Object;
    tmp.anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', PrimitiveClasses$anyClass$lambda);
    var tmp_1 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_2 = Number;
    tmp_1.numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', PrimitiveClasses$numberClass$lambda);
    this.nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_4 = Boolean;
    tmp_3.booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', PrimitiveClasses$booleanClass$lambda);
    var tmp_5 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_6 = Number;
    tmp_5.byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', PrimitiveClasses$byteClass$lambda);
    var tmp_7 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_8 = Number;
    tmp_7.shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', PrimitiveClasses$shortClass$lambda);
    var tmp_9 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_10 = Number;
    tmp_9.intClass = new PrimitiveKClassImpl(tmp_10, 'Int', PrimitiveClasses$intClass$lambda);
    var tmp_11 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_12 = Number;
    tmp_11.floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', PrimitiveClasses$floatClass$lambda);
    var tmp_13 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_14 = Number;
    tmp_13.doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', PrimitiveClasses$doubleClass$lambda);
    var tmp_15 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_16 = Array;
    tmp_15.arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', PrimitiveClasses$arrayClass$lambda);
    var tmp_17 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_18 = String;
    tmp_17.stringClass = new PrimitiveKClassImpl(tmp_18, 'String', PrimitiveClasses$stringClass$lambda);
    var tmp_19 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_20 = Error;
    tmp_19.throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', PrimitiveClasses$throwableClass$lambda);
    var tmp_21 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_22 = Array;
    tmp_21.booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', PrimitiveClasses$booleanArrayClass$lambda);
    var tmp_23 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_24 = Uint16Array;
    tmp_23.charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', PrimitiveClasses$charArrayClass$lambda);
    var tmp_25 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_26 = Int8Array;
    tmp_25.byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', PrimitiveClasses$byteArrayClass$lambda);
    var tmp_27 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_28 = Int16Array;
    tmp_27.shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', PrimitiveClasses$shortArrayClass$lambda);
    var tmp_29 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_30 = Int32Array;
    tmp_29.intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', PrimitiveClasses$intArrayClass$lambda);
    var tmp_31 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_32 = Array;
    tmp_31.longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', PrimitiveClasses$longArrayClass$lambda);
    var tmp_33 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_34 = Float32Array;
    tmp_33.floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', PrimitiveClasses$floatArrayClass$lambda);
    var tmp_35 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_36 = Float64Array;
    tmp_35.doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', PrimitiveClasses$doubleArrayClass$lambda);
  }
  protoOf(PrimitiveClasses).v5 = function () {
    return this.anyClass;
  };
  protoOf(PrimitiveClasses).w5 = function () {
    return this.numberClass;
  };
  protoOf(PrimitiveClasses).x5 = function () {
    return this.nothingClass;
  };
  protoOf(PrimitiveClasses).y5 = function () {
    return this.booleanClass;
  };
  protoOf(PrimitiveClasses).z5 = function () {
    return this.byteClass;
  };
  protoOf(PrimitiveClasses).a6 = function () {
    return this.shortClass;
  };
  protoOf(PrimitiveClasses).b6 = function () {
    return this.intClass;
  };
  protoOf(PrimitiveClasses).c6 = function () {
    return this.floatClass;
  };
  protoOf(PrimitiveClasses).d6 = function () {
    return this.doubleClass;
  };
  protoOf(PrimitiveClasses).e6 = function () {
    return this.arrayClass;
  };
  protoOf(PrimitiveClasses).f6 = function () {
    return this.stringClass;
  };
  protoOf(PrimitiveClasses).g6 = function () {
    return this.throwableClass;
  };
  protoOf(PrimitiveClasses).h6 = function () {
    return this.booleanArrayClass;
  };
  protoOf(PrimitiveClasses).i6 = function () {
    return this.charArrayClass;
  };
  protoOf(PrimitiveClasses).j6 = function () {
    return this.byteArrayClass;
  };
  protoOf(PrimitiveClasses).k6 = function () {
    return this.shortArrayClass;
  };
  protoOf(PrimitiveClasses).l6 = function () {
    return this.intArrayClass;
  };
  protoOf(PrimitiveClasses).m6 = function () {
    return this.longArrayClass;
  };
  protoOf(PrimitiveClasses).n6 = function () {
    return this.floatArrayClass;
  };
  protoOf(PrimitiveClasses).o6 = function () {
    return this.doubleArrayClass;
  };
  protoOf(PrimitiveClasses).functionClass = function (arity) {
    var tmp0_elvis_lhs = get_functionClasses()[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.reflect.js.internal.PrimitiveClasses.functionClass.<anonymous>' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_0 = Function;
      var tmp_1 = 'Function' + arity;
      var result = new PrimitiveKClassImpl(tmp_0, tmp_1, PrimitiveClasses$functionClass$lambda(arity));
      // Inline function 'kotlin.js.asDynamic' call
      get_functionClasses()[arity] = result;
      tmp = result;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses();
    return PrimitiveClasses_instance;
  }
  var properties_initialized_primitives_kt_jle18u;
  function _init_properties_primitives_kt__3fums4() {
    if (!properties_initialized_primitives_kt_jle18u) {
      properties_initialized_primitives_kt_jle18u = true;
      // Inline function 'kotlin.arrayOfNulls' call
      functionClasses = fillArrayVal(Array(0), null);
    }
  }
  function getKClass(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = getKClassM(jClass);
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = getKClass1(jClass);
    }
    return tmp;
  }
  function getKClassM(jClasses) {
    var tmp;
    switch (jClasses.length) {
      case 1:
        tmp = getKClass1(jClasses[0]);
        break;
      case 0:
        // Inline function 'kotlin.js.unsafeCast' call

        // Inline function 'kotlin.js.asDynamic' call

        tmp = NothingKClassImpl_getInstance();
        break;
      default:
        // Inline function 'kotlin.js.unsafeCast' call

        // Inline function 'kotlin.js.asDynamic' call

        tmp = new ErrorKClass();
        break;
    }
    return tmp;
  }
  function getKClass1(jClass) {
    if (jClass === String) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return PrimitiveClasses_getInstance().stringClass;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var metadata = jClass.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function getKClassFromExpression(e) {
    var tmp;
    switch (typeof e) {
      case 'string':
        tmp = PrimitiveClasses_getInstance().stringClass;
        break;
      case 'number':
        var tmp_0;
        // Inline function 'kotlin.js.jsBitwiseOr' call

        // Inline function 'kotlin.js.asDynamic' call

        if ((e | 0) === e) {
          tmp_0 = PrimitiveClasses_getInstance().intClass;
        } else {
          tmp_0 = PrimitiveClasses_getInstance().doubleClass;
        }

        tmp = tmp_0;
        break;
      case 'boolean':
        tmp = PrimitiveClasses_getInstance().booleanClass;
        break;
      case 'function':
        var tmp_1 = PrimitiveClasses_getInstance();
        // Inline function 'kotlin.js.asDynamic' call

        tmp = tmp_1.functionClass(e.length);
        break;
      default:
        var tmp_2;
        if (isBooleanArray(e)) {
          tmp_2 = PrimitiveClasses_getInstance().booleanArrayClass;
        } else {
          if (isCharArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance().charArrayClass;
          } else {
            if (isByteArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance().byteArrayClass;
            } else {
              if (isShortArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance().shortArrayClass;
              } else {
                if (isIntArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance().intArrayClass;
                } else {
                  if (isLongArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance().longArrayClass;
                  } else {
                    if (isFloatArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance().floatArrayClass;
                    } else {
                      if (isDoubleArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance().doubleArrayClass;
                      } else {
                        if (isInterface(e, KClass)) {
                          tmp_2 = getKClass(KClass);
                        } else {
                          if (isArray(e)) {
                            tmp_2 = PrimitiveClasses_getInstance().arrayClass;
                          } else {
                            var constructor = Object.getPrototypeOf(e).constructor;
                            var tmp_3;
                            if (constructor === Object) {
                              tmp_3 = PrimitiveClasses_getInstance().anyClass;
                            } else if (constructor === Error) {
                              tmp_3 = PrimitiveClasses_getInstance().throwableClass;
                            } else {
                              var jsClass = constructor;
                              tmp_3 = getKClass1(jsClass);
                            }
                            tmp_2 = tmp_3;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        tmp = tmp_2;
        break;
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return tmp;
  }
  function StringBuilder_init_$Init$(capacity, $this) {
    StringBuilder_init_$Init$_0($this);
    return $this;
  }
  function StringBuilder_init_$Create$(capacity) {
    return StringBuilder_init_$Init$(capacity, objectCreate(protoOf(StringBuilder)));
  }
  function StringBuilder_init_$Init$_0($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$_0() {
    return StringBuilder_init_$Init$_0(objectCreate(protoOf(StringBuilder)));
  }
  function StringBuilder(content) {
    this.p3_1 = content;
  }
  protoOf(StringBuilder).a = function () {
    // Inline function 'kotlin.js.asDynamic' call
    return this.p3_1.length;
  };
  protoOf(StringBuilder).s3 = function (value) {
    this.p3_1 = this.p3_1 + toString(value);
    return this;
  };
  protoOf(StringBuilder).b = function (value) {
    this.p3_1 = this.p3_1 + toString_0(value);
    return this;
  };
  protoOf(StringBuilder).q3 = function (value) {
    this.p3_1 = this.p3_1 + toString_0(value);
    return this;
  };
  protoOf(StringBuilder).r3 = function (value) {
    var tmp = this;
    var tmp_0 = this.p3_1;
    tmp.p3_1 = tmp_0 + (value == null ? 'null' : value);
    return this;
  };
  protoOf(StringBuilder).toString = function () {
    return this.p3_1;
  };
  function addSuppressed(_this__u8e3s4, exception) {
    if (!(_this__u8e3s4 === exception)) {
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var suppressed = _this__u8e3s4._suppressed;
      if (suppressed == null) {
        // Inline function 'kotlin.js.asDynamic' call
        _this__u8e3s4._suppressed = mutableListOf([exception]);
      } else {
        suppressed.h1(exception);
      }
    }
  }
  function AbstractCollection$toString$lambda(this$0) {
    return function (it) {
      return it === this$0 ? '(this Collection)' : toString_0(it);
    };
  }
  function AbstractCollection() {
  }
  protoOf(AbstractCollection).h = function (element) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.g();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = this.c();
      while (_iterator__ex2g4s.d()) {
        var element_0 = _iterator__ex2g4s.e();
        // Inline function 'kotlin.collections.AbstractCollection.contains.<anonymous>' call
        if (equals(element_0, element)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractCollection).j = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.g();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = elements.c();
      while (_iterator__ex2g4s.d()) {
        var element = _iterator__ex2g4s.e();
        // Inline function 'kotlin.collections.AbstractCollection.containsAll.<anonymous>' call
        if (!this.h(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractCollection).g = function () {
    return this.f() === 0;
  };
  protoOf(AbstractCollection).toString = function () {
    return joinToString_0(this, ', ', '[', ']', VOID, VOID, AbstractCollection$toString$lambda(this));
  };
  protoOf(AbstractCollection).toArray = function () {
    return collectionToArray(this);
  };
  function Companion_3() {
    this.f1_1 = 2147483639;
  }
  protoOf(Companion_3).y1 = function (index, size) {
    if (index < 0 || index >= size) {
      throw IndexOutOfBoundsException_init_$Create$_0('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(Companion_3).z1 = function (index, size) {
    if (index < 0 || index > size) {
      throw IndexOutOfBoundsException_init_$Create$_0('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(Companion_3).g1 = function (fromIndex, toIndex, size) {
    if (fromIndex < 0 || toIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$_0('fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size);
    }
    if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$_0('fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
    }
  };
  protoOf(Companion_3).s2 = function (oldCapacity, minCapacity) {
    var newCapacity = oldCapacity + (oldCapacity >> 1) | 0;
    if ((newCapacity - minCapacity | 0) < 0)
      newCapacity = minCapacity;
    if ((newCapacity - 2147483639 | 0) > 0)
      newCapacity = minCapacity > 2147483639 ? 2147483647 : 2147483639;
    return newCapacity;
  };
  protoOf(Companion_3).r1 = function (c) {
    var hashCode_0 = 1;
    var _iterator__ex2g4s = c.c();
    while (_iterator__ex2g4s.d()) {
      var e = _iterator__ex2g4s.e();
      var tmp = imul(31, hashCode_0);
      var tmp1_elvis_lhs = e == null ? null : hashCode(e);
      hashCode_0 = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  protoOf(Companion_3).q1 = function (c, other) {
    if (!(c.f() === other.f()))
      return false;
    var otherIterator = other.c();
    var _iterator__ex2g4s = c.c();
    while (_iterator__ex2g4s.d()) {
      var elem = _iterator__ex2g4s.e();
      var elemOther = otherIterator.e();
      if (!equals(elem, elemOther)) {
        return false;
      }
    }
    return true;
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function Companion_4() {
  }
  protoOf(Companion_4).t1 = function (c) {
    var hashCode_0 = 0;
    var _iterator__ex2g4s = c.c();
    while (_iterator__ex2g4s.d()) {
      var element = _iterator__ex2g4s.e();
      var tmp = hashCode_0;
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      hashCode_0 = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  protoOf(Companion_4).s1 = function (c, other) {
    if (!(c.f() === other.f()))
      return false;
    return c.j(other);
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function ArrayDeque_init_$Init$($this) {
    AbstractMutableList.call($this);
    ArrayDeque.call($this);
    $this.r6_1 = Companion_getInstance_5().t6_1;
    return $this;
  }
  function ArrayDeque_init_$Create$() {
    return ArrayDeque_init_$Init$(objectCreate(protoOf(ArrayDeque)));
  }
  function ensureCapacity_0($this, minCapacity) {
    if (minCapacity < 0)
      throw IllegalStateException_init_$Create$_0('Deque is too big.');
    if (minCapacity <= $this.r6_1.length)
      return Unit_instance;
    if ($this.r6_1 === Companion_getInstance_5().t6_1) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size = coerceAtLeast(minCapacity, 10);
      tmp.r6_1 = fillArrayVal(Array(size), null);
      return Unit_instance;
    }
    var newCapacity = Companion_instance_3.s2($this.r6_1.length, minCapacity);
    copyElements($this, newCapacity);
  }
  function copyElements($this, newCapacity) {
    // Inline function 'kotlin.arrayOfNulls' call
    var newElements = fillArrayVal(Array(newCapacity), null);
    var tmp1 = $this.r6_1;
    var tmp4 = $this.q6_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = $this.r6_1.length;
    arrayCopy(tmp1, newElements, 0, tmp4, endIndex);
    var tmp6 = $this.r6_1;
    var tmp8 = $this.r6_1.length - $this.q6_1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = $this.q6_1;
    arrayCopy(tmp6, newElements, tmp8, 0, endIndex_0);
    $this.q6_1 = 0;
    $this.r6_1 = newElements;
  }
  function positiveMod($this, index) {
    return index >= $this.r6_1.length ? index - $this.r6_1.length | 0 : index;
  }
  function incremented($this, index) {
    return index === get_lastIndex($this.r6_1) ? 0 : index + 1 | 0;
  }
  function decremented($this, index) {
    return index === 0 ? get_lastIndex($this.r6_1) : index - 1 | 0;
  }
  function registerModification_0($this) {
    $this.m1_1 = $this.m1_1 + 1 | 0;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    tmp.t6_1 = [];
    this.u6_1 = 10;
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  protoOf(ArrayDeque).f = function () {
    return this.s6_1;
  };
  protoOf(ArrayDeque).g = function () {
    return this.s6_1 === 0;
  };
  protoOf(ArrayDeque).v6 = function (element) {
    registerModification_0(this);
    ensureCapacity_0(this, this.s6_1 + 1 | 0);
    this.q6_1 = decremented(this, this.q6_1);
    this.r6_1[this.q6_1] = element;
    this.s6_1 = this.s6_1 + 1 | 0;
  };
  protoOf(ArrayDeque).w6 = function (element) {
    registerModification_0(this);
    ensureCapacity_0(this, this.s6_1 + 1 | 0);
    var tmp = this.r6_1;
    // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
    var index = this.s6_1;
    tmp[positiveMod(this, this.q6_1 + index | 0)] = element;
    this.s6_1 = this.s6_1 + 1 | 0;
  };
  protoOf(ArrayDeque).x6 = function () {
    if (this.g())
      throw NoSuchElementException_init_$Create$_0('ArrayDeque is empty.');
    registerModification_0(this);
    // Inline function 'kotlin.collections.ArrayDeque.internalGet' call
    var internalIndex = this.q6_1;
    var tmp = this.r6_1[internalIndex];
    var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.r6_1[this.q6_1] = null;
    this.q6_1 = incremented(this, this.q6_1);
    this.s6_1 = this.s6_1 - 1 | 0;
    return element;
  };
  protoOf(ArrayDeque).y6 = function () {
    return this.g() ? null : this.x6();
  };
  protoOf(ArrayDeque).z6 = function () {
    if (this.g())
      throw NoSuchElementException_init_$Create$_0('ArrayDeque is empty.');
    registerModification_0(this);
    // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
    var index = get_lastIndex_0(this);
    var internalLastIndex = positiveMod(this, this.q6_1 + index | 0);
    // Inline function 'kotlin.collections.ArrayDeque.internalGet' call
    var tmp = this.r6_1[internalLastIndex];
    var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.r6_1[internalLastIndex] = null;
    this.s6_1 = this.s6_1 - 1 | 0;
    return element;
  };
  protoOf(ArrayDeque).h1 = function (element) {
    this.w6(element);
    return true;
  };
  protoOf(ArrayDeque).n1 = function (index, element) {
    Companion_instance_3.z1(index, this.s6_1);
    if (index === this.s6_1) {
      this.w6(element);
      return Unit_instance;
    } else if (index === 0) {
      this.v6(element);
      return Unit_instance;
    }
    registerModification_0(this);
    ensureCapacity_0(this, this.s6_1 + 1 | 0);
    // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
    var internalIndex = positiveMod(this, this.q6_1 + index | 0);
    if (index < (this.s6_1 + 1 | 0) >> 1) {
      var decrementedInternalIndex = decremented(this, internalIndex);
      var decrementedHead = decremented(this, this.q6_1);
      if (decrementedInternalIndex >= this.q6_1) {
        this.r6_1[decrementedHead] = this.r6_1[this.q6_1];
        var tmp0 = this.r6_1;
        var tmp1 = this.r6_1;
        var tmp2 = this.q6_1;
        var tmp3 = this.q6_1 + 1 | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = decrementedInternalIndex + 1 | 0;
        arrayCopy(tmp0, tmp1, tmp2, tmp3, endIndex);
      } else {
        var tmp5 = this.r6_1;
        var tmp6 = this.r6_1;
        var tmp7 = this.q6_1 - 1 | 0;
        var tmp8 = this.q6_1;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex_0 = this.r6_1.length;
        arrayCopy(tmp5, tmp6, tmp7, tmp8, endIndex_0);
        this.r6_1[this.r6_1.length - 1 | 0] = this.r6_1[0];
        var tmp10 = this.r6_1;
        var tmp11 = this.r6_1;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex_1 = decrementedInternalIndex + 1 | 0;
        arrayCopy(tmp10, tmp11, 0, 1, endIndex_1);
      }
      this.r6_1[decrementedInternalIndex] = element;
      this.q6_1 = decrementedHead;
    } else {
      // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
      var index_0 = this.s6_1;
      var tail = positiveMod(this, this.q6_1 + index_0 | 0);
      if (internalIndex < tail) {
        var tmp15 = this.r6_1;
        var tmp16 = this.r6_1;
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = internalIndex + 1 | 0;
        arrayCopy(tmp15, tmp16, destinationOffset, internalIndex, tail);
      } else {
        var tmp20 = this.r6_1;
        // Inline function 'kotlin.collections.copyInto' call
        var destination = this.r6_1;
        arrayCopy(tmp20, destination, 1, 0, tail);
        this.r6_1[0] = this.r6_1[this.r6_1.length - 1 | 0];
        var tmp25 = this.r6_1;
        var tmp26 = this.r6_1;
        var tmp27 = internalIndex + 1 | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex_2 = this.r6_1.length - 1 | 0;
        arrayCopy(tmp25, tmp26, tmp27, internalIndex, endIndex_2);
      }
      this.r6_1[internalIndex] = element;
    }
    this.s6_1 = this.s6_1 + 1 | 0;
  };
  protoOf(ArrayDeque).i = function (index) {
    Companion_instance_3.y1(index, this.s6_1);
    // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
    // Inline function 'kotlin.collections.ArrayDeque.internalGet' call
    var internalIndex = positiveMod(this, this.q6_1 + index | 0);
    var tmp = this.r6_1[internalIndex];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ArrayDeque).h = function (element) {
    return !(this.p1(element) === -1);
  };
  protoOf(ArrayDeque).p1 = function (element) {
    // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
    var index = this.s6_1;
    var tail = positiveMod(this, this.q6_1 + index | 0);
    if (this.q6_1 < tail) {
      var inductionVariable = this.q6_1;
      if (inductionVariable < tail)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (equals(element, this.r6_1[index_0]))
            return index_0 - this.q6_1 | 0;
        }
         while (inductionVariable < tail);
    } else if (this.q6_1 >= tail) {
      var inductionVariable_0 = this.q6_1;
      var last = this.r6_1.length;
      if (inductionVariable_0 < last)
        do {
          var index_1 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals(element, this.r6_1[index_1]))
            return index_1 - this.q6_1 | 0;
        }
         while (inductionVariable_0 < last);
      var inductionVariable_1 = 0;
      if (inductionVariable_1 < tail)
        do {
          var index_2 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          if (equals(element, this.r6_1[index_2]))
            return (index_2 + this.r6_1.length | 0) - this.q6_1 | 0;
        }
         while (inductionVariable_1 < tail);
    }
    return -1;
  };
  protoOf(ArrayDeque).o1 = function (index) {
    Companion_instance_3.y1(index, this.s6_1);
    if (index === get_lastIndex_0(this)) {
      return this.z6();
    } else if (index === 0) {
      return this.x6();
    }
    registerModification_0(this);
    // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
    var internalIndex = positiveMod(this, this.q6_1 + index | 0);
    // Inline function 'kotlin.collections.ArrayDeque.internalGet' call
    var tmp = this.r6_1[internalIndex];
    var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    if (index < this.s6_1 >> 1) {
      if (internalIndex >= this.q6_1) {
        var tmp0 = this.r6_1;
        var tmp1 = this.r6_1;
        var tmp2 = this.q6_1 + 1 | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = this.q6_1;
        arrayCopy(tmp0, tmp1, tmp2, startIndex, internalIndex);
      } else {
        var tmp5 = this.r6_1;
        // Inline function 'kotlin.collections.copyInto' call
        var destination = this.r6_1;
        arrayCopy(tmp5, destination, 1, 0, internalIndex);
        this.r6_1[0] = this.r6_1[this.r6_1.length - 1 | 0];
        var tmp10 = this.r6_1;
        var tmp11 = this.r6_1;
        var tmp12 = this.q6_1 + 1 | 0;
        var tmp13 = this.q6_1;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = this.r6_1.length - 1 | 0;
        arrayCopy(tmp10, tmp11, tmp12, tmp13, endIndex);
      }
      this.r6_1[this.q6_1] = null;
      this.q6_1 = incremented(this, this.q6_1);
    } else {
      // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
      var index_0 = get_lastIndex_0(this);
      var internalLastIndex = positiveMod(this, this.q6_1 + index_0 | 0);
      if (internalIndex <= internalLastIndex) {
        var tmp15 = this.r6_1;
        var tmp16 = this.r6_1;
        var tmp18 = internalIndex + 1 | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex_0 = internalLastIndex + 1 | 0;
        arrayCopy(tmp15, tmp16, internalIndex, tmp18, endIndex_0);
      } else {
        var tmp20 = this.r6_1;
        var tmp21 = this.r6_1;
        var tmp23 = internalIndex + 1 | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex_1 = this.r6_1.length;
        arrayCopy(tmp20, tmp21, internalIndex, tmp23, endIndex_1);
        this.r6_1[this.r6_1.length - 1 | 0] = this.r6_1[0];
        var tmp25 = this.r6_1;
        var tmp26 = this.r6_1;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex_2 = internalLastIndex + 1 | 0;
        arrayCopy(tmp25, tmp26, 0, 1, endIndex_2);
      }
      this.r6_1[internalLastIndex] = null;
    }
    this.s6_1 = this.s6_1 - 1 | 0;
    return element;
  };
  protoOf(ArrayDeque).a7 = function (array) {
    var tmp = array.length >= this.s6_1 ? array : arrayOfNulls(array, this.s6_1);
    var dest = isArray(tmp) ? tmp : THROW_CCE();
    // Inline function 'kotlin.collections.ArrayDeque.internalIndex' call
    var index = this.s6_1;
    var tail = positiveMod(this, this.q6_1 + index | 0);
    if (this.q6_1 < tail) {
      var tmp0 = this.r6_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = this.q6_1;
      arrayCopy(tmp0, dest, 0, startIndex, tail);
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.g()) {
        var tmp6 = this.r6_1;
        var tmp9 = this.q6_1;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = this.r6_1.length;
        arrayCopy(tmp6, dest, 0, tmp9, endIndex);
        var tmp11 = this.r6_1;
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = this.r6_1.length - this.q6_1 | 0;
        arrayCopy(tmp11, dest, destinationOffset, 0, tail);
      }
    }
    var tmp_0 = terminateCollectionToArray(this.s6_1, dest);
    return isArray(tmp_0) ? tmp_0 : THROW_CCE();
  };
  protoOf(ArrayDeque).a2 = function () {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.s6_1;
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    return this.a7(tmp$ret$0);
  };
  protoOf(ArrayDeque).toArray = function () {
    return this.a2();
  };
  function ArrayDeque() {
    Companion_getInstance_5();
    this.q6_1 = 0;
    this.s6_1 = 0;
  }
  function collectionToArrayCommonImpl(collection) {
    if (collection.g()) {
      // Inline function 'kotlin.emptyArray' call
      return [];
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var size = collection.f();
    var destination = fillArrayVal(Array(size), null);
    var iterator = collection.c();
    var index = 0;
    while (iterator.d()) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      destination[_unary__edvuaz] = iterator.e();
    }
    return destination;
  }
  function mutableListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
  }
  function get_lastIndex_0(_this__u8e3s4) {
    return _this__u8e3s4.f() - 1 | 0;
  }
  function ArrayAsCollection(values, isVarargs) {
    this.b7_1 = values;
    this.c7_1 = isVarargs;
  }
  protoOf(ArrayAsCollection).f = function () {
    return this.b7_1.length;
  };
  protoOf(ArrayAsCollection).g = function () {
    // Inline function 'kotlin.collections.isEmpty' call
    return this.b7_1.length === 0;
  };
  protoOf(ArrayAsCollection).c = function () {
    return arrayIterator(this.b7_1);
  };
  function removeFirstOrNull(_this__u8e3s4) {
    return _this__u8e3s4.g() ? null : _this__u8e3s4.o1(0);
  }
  function Continuation() {
  }
  function startCoroutine(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlin.coroutines.resume' call
    var this_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
    // Inline function 'kotlin.Companion.success' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
    this_0.j4(tmp$ret$0);
  }
  function Key() {
  }
  var Key_instance;
  function Key_getInstance() {
    return Key_instance;
  }
  function ContinuationInterceptor() {
  }
  function Element() {
  }
  function CoroutineContext$plus$lambda(acc, element) {
    var removed = acc.h7(element.k());
    var tmp;
    if (removed === EmptyCoroutineContext_getInstance()) {
      tmp = element;
    } else {
      var interceptor = removed.l4(Key_instance);
      var tmp_0;
      if (interceptor == null) {
        tmp_0 = new CombinedContext(removed, element);
      } else {
        var left = removed.h7(Key_instance);
        tmp_0 = left === EmptyCoroutineContext_getInstance() ? new CombinedContext(element, interceptor) : new CombinedContext(new CombinedContext(left, element), interceptor);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function CoroutineContext() {
  }
  function EmptyCoroutineContext() {
    EmptyCoroutineContext_instance = this;
    this.k7_1 = new Long(0, 0);
  }
  protoOf(EmptyCoroutineContext).l4 = function (key) {
    return null;
  };
  protoOf(EmptyCoroutineContext).i7 = function (initial, operation) {
    return initial;
  };
  protoOf(EmptyCoroutineContext).j7 = function (context) {
    return context;
  };
  protoOf(EmptyCoroutineContext).h7 = function (key) {
    return this;
  };
  protoOf(EmptyCoroutineContext).hashCode = function () {
    return 0;
  };
  protoOf(EmptyCoroutineContext).toString = function () {
    return 'EmptyCoroutineContext';
  };
  var EmptyCoroutineContext_instance;
  function EmptyCoroutineContext_getInstance() {
    if (EmptyCoroutineContext_instance == null)
      new EmptyCoroutineContext();
    return EmptyCoroutineContext_instance;
  }
  function size($this) {
    var cur = $this;
    var size = 2;
    while (true) {
      var tmp = cur.l7_1;
      var tmp0_elvis_lhs = tmp instanceof CombinedContext ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return size;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      cur = tmp_0;
      size = size + 1 | 0;
    }
  }
  function contains($this, element) {
    return equals($this.l4(element.k()), element);
  }
  function containsAll($this, context) {
    var cur = context;
    while (true) {
      if (!contains($this, cur.m7_1))
        return false;
      var next = cur.l7_1;
      if (next instanceof CombinedContext) {
        cur = next;
      } else {
        return contains($this, isInterface(next, Element) ? next : THROW_CCE());
      }
    }
  }
  function CombinedContext$toString$lambda(acc, element) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(acc) === 0) {
      tmp = toString_1(element);
    } else {
      tmp = acc + ', ' + toString_1(element);
    }
    return tmp;
  }
  function CombinedContext(left, element) {
    this.l7_1 = left;
    this.m7_1 = element;
  }
  protoOf(CombinedContext).l4 = function (key) {
    var cur = this;
    while (true) {
      var tmp0_safe_receiver = cur.m7_1.l4(key);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        return tmp0_safe_receiver;
      }
      var next = cur.l7_1;
      if (next instanceof CombinedContext) {
        cur = next;
      } else {
        return next.l4(key);
      }
    }
  };
  protoOf(CombinedContext).i7 = function (initial, operation) {
    return operation(this.l7_1.i7(initial, operation), this.m7_1);
  };
  protoOf(CombinedContext).h7 = function (key) {
    if (this.m7_1.l4(key) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return this.l7_1;
    }
    var newLeft = this.l7_1.h7(key);
    return newLeft === this.l7_1 ? this : newLeft === EmptyCoroutineContext_getInstance() ? this.m7_1 : new CombinedContext(newLeft, this.m7_1);
  };
  protoOf(CombinedContext).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (other instanceof CombinedContext) {
        tmp_1 = size(other) === size(this);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = containsAll(other, this);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CombinedContext).hashCode = function () {
    return hashCode(this.l7_1) + hashCode(this.m7_1) | 0;
  };
  protoOf(CombinedContext).toString = function () {
    return '[' + this.i7('', CombinedContext$toString$lambda) + ']';
  };
  function AbstractCoroutineContextKey(baseKey, safeCast) {
    this.d7_1 = safeCast;
    var tmp = this;
    var tmp_0;
    if (baseKey instanceof AbstractCoroutineContextKey) {
      tmp_0 = baseKey.e7_1;
    } else {
      tmp_0 = baseKey;
    }
    tmp.e7_1 = tmp_0;
  }
  protoOf(AbstractCoroutineContextKey).f7 = function (element) {
    return this.d7_1(element);
  };
  protoOf(AbstractCoroutineContextKey).g7 = function (key) {
    return key === this || this.e7_1 === key;
  };
  function AbstractCoroutineContextElement(key) {
    this.n7_1 = key;
  }
  protoOf(AbstractCoroutineContextElement).k = function () {
    return this.n7_1;
  };
  function get_COROUTINE_SUSPENDED() {
    return CoroutineSingletons_COROUTINE_SUSPENDED_getInstance();
  }
  var CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  var CoroutineSingletons_UNDECIDED_instance;
  var CoroutineSingletons_RESUMED_instance;
  var CoroutineSingletons_entriesInitialized;
  function CoroutineSingletons_initEntries() {
    if (CoroutineSingletons_entriesInitialized)
      return Unit_instance;
    CoroutineSingletons_entriesInitialized = true;
    CoroutineSingletons_COROUTINE_SUSPENDED_instance = new CoroutineSingletons('COROUTINE_SUSPENDED', 0);
    CoroutineSingletons_UNDECIDED_instance = new CoroutineSingletons('UNDECIDED', 1);
    CoroutineSingletons_RESUMED_instance = new CoroutineSingletons('RESUMED', 2);
  }
  function CoroutineSingletons(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function CoroutineSingletons_COROUTINE_SUSPENDED_getInstance() {
    CoroutineSingletons_initEntries();
    return CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null))
      _this__u8e3s4.b(transform(element));
    else {
      if (element == null ? true : isCharSequence(element))
        _this__u8e3s4.b(element);
      else {
        if (element instanceof Char)
          _this__u8e3s4.s3(element.o7_1);
        else {
          _this__u8e3s4.b(toString_1(element));
        }
      }
    }
  }
  function _Result___init__impl__xyqfz8(value) {
    return value;
  }
  function _Result___get_value__impl__bjfvqg($this) {
    return $this;
  }
  function _Result___get_isFailure__impl__jpiriv($this) {
    var tmp = _Result___get_value__impl__bjfvqg($this);
    return tmp instanceof Failure;
  }
  function Result__exceptionOrNull_impl_p6xea9($this) {
    var tmp;
    if (_Result___get_value__impl__bjfvqg($this) instanceof Failure) {
      tmp = _Result___get_value__impl__bjfvqg($this).p7_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function Companion_6() {
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function Failure(exception) {
    this.p7_1 = exception;
  }
  protoOf(Failure).equals = function (other) {
    var tmp;
    if (other instanceof Failure) {
      tmp = equals(this.p7_1, other.p7_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Failure).hashCode = function () {
    return hashCode(this.p7_1);
  };
  protoOf(Failure).toString = function () {
    return 'Failure(' + this.p7_1.toString() + ')';
  };
  function createFailure(exception) {
    return new Failure(exception);
  }
  function throwOnFailure(_this__u8e3s4) {
    var tmp = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
    if (tmp instanceof Failure)
      throw _Result___get_value__impl__bjfvqg(_this__u8e3s4).p7_1;
  }
  function NotImplementedError(message) {
    message = message === VOID ? 'An operation is not implemented.' : message;
    Error_init_$Init$_0(message, this);
    captureStack(this, NotImplementedError);
  }
  //region block: post-declaration
  protoOf(InternalHashMap).u2 = containsAllEntries;
  protoOf(CombinedContext).j7 = plus;
  protoOf(AbstractCoroutineContextElement).l4 = get;
  protoOf(AbstractCoroutineContextElement).i7 = fold;
  protoOf(AbstractCoroutineContextElement).h7 = minusKey;
  protoOf(AbstractCoroutineContextElement).j7 = plus;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Unit_instance = new Unit();
  Companion_instance_2 = new Companion_2();
  CompletedContinuation_instance = new CompletedContinuation();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Key_instance = new Key();
  Companion_instance_6 = new Companion_6();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = getKClassFromExpression;
  _.$_$.b = VOID;
  _.$_$.c = ArrayDeque_init_$Create$;
  _.$_$.d = ArrayList_init_$Create$_0;
  _.$_$.e = HashSet_init_$Create$_0;
  _.$_$.f = LinkedHashSet_init_$Create$;
  _.$_$.g = CancellationException_init_$Create$_0;
  _.$_$.h = CancellationException_init_$Init$_1;
  _.$_$.i = StringBuilder_init_$Create$_0;
  _.$_$.j = Error_init_$Init$_1;
  _.$_$.k = Exception_init_$Create$_0;
  _.$_$.l = IllegalArgumentException_init_$Create$_0;
  _.$_$.m = IllegalStateException_init_$Create$_0;
  _.$_$.n = IllegalStateException_init_$Create$_1;
  _.$_$.o = RuntimeException_init_$Init$_0;
  _.$_$.p = RuntimeException_init_$Init$_1;
  _.$_$.q = RuntimeException_init_$Create$_1;
  _.$_$.r = UnsupportedOperationException_init_$Create$_0;
  _.$_$.s = _Result___init__impl__xyqfz8;
  _.$_$.t = Result__exceptionOrNull_impl_p6xea9;
  _.$_$.u = _Result___get_value__impl__bjfvqg;
  _.$_$.v = Key_instance;
  _.$_$.w = EmptyCoroutineContext_getInstance;
  _.$_$.x = Companion_instance_6;
  _.$_$.y = Unit_instance;
  _.$_$.z = ArrayList;
  _.$_$.a1 = Collection;
  _.$_$.b1 = KtList;
  _.$_$.c1 = removeFirstOrNull;
  _.$_$.d1 = CancellationException;
  _.$_$.e1 = get_COROUTINE_SUSPENDED;
  _.$_$.f1 = createCoroutineUnintercepted;
  _.$_$.g1 = intercepted;
  _.$_$.h1 = startCoroutineUninterceptedOrReturnNonGeneratorVersion;
  _.$_$.i1 = get_EmptyContinuation;
  _.$_$.j1 = AbstractCoroutineContextElement;
  _.$_$.k1 = AbstractCoroutineContextKey;
  _.$_$.l1 = get_0;
  _.$_$.m1 = minusKey_0;
  _.$_$.n1 = ContinuationInterceptor;
  _.$_$.o1 = Continuation;
  _.$_$.p1 = fold;
  _.$_$.q1 = get;
  _.$_$.r1 = minusKey;
  _.$_$.s1 = Element;
  _.$_$.t1 = plus;
  _.$_$.u1 = CoroutineImpl;
  _.$_$.v1 = startCoroutine;
  _.$_$.w1 = anyToString;
  _.$_$.x1 = captureStack;
  _.$_$.y1 = equals;
  _.$_$.z1 = getStringHashCode;
  _.$_$.a2 = hashCode;
  _.$_$.b2 = initMetadataForClass;
  _.$_$.c2 = initMetadataForCoroutine;
  _.$_$.d2 = initMetadataForInterface;
  _.$_$.e2 = initMetadataForLambda;
  _.$_$.f2 = initMetadataForObject;
  _.$_$.g2 = isInterface;
  _.$_$.h2 = protoOf;
  _.$_$.i2 = toString_1;
  _.$_$.j2 = Enum;
  _.$_$.k2 = Error_0;
  _.$_$.l2 = Exception;
  _.$_$.m2 = Long;
  _.$_$.n2 = RuntimeException;
  _.$_$.o2 = THROW_CCE;
  _.$_$.p2 = UnsupportedOperationException;
  _.$_$.q2 = addSuppressed;
  _.$_$.r2 = createFailure;
  _.$_$.s2 = ensureNotNull;
  _.$_$.t2 = noWhenBranchMatchedException;
  _.$_$.u2 = throwUninitializedPropertyAccessException;
  _.$_$.v2 = toString_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-kotlin-stdlib.js.map
