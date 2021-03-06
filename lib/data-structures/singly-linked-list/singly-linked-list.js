"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Singly Linked List
 * ------------------
 * Implementation of a singley linked list.
 *
 * @property {SinglyLinkedListNode} list - the list starts of as null. The first added sinlgly list node will become the
 *    parent. All other nodes will be added to the parent as children.
 */
var SinglyLinkedList = /*#__PURE__*/function () {
  function SinglyLinkedList() {
    _classCallCheck(this, SinglyLinkedList);

    this.list = null;
    this._size = 0;
  }
  /**
   * add()
   * -----
   * Takes in a node and appends the node to the end of the sinlgly linked list.
   *
   * @alias (addToEnd)
   *
   * @param {SinglyLinkedListNode} node - an instance of the SinglyLinkedListNode class
   */


  _createClass(SinglyLinkedList, [{
    key: "add",
    value: function add(node) {
      if (!this.list) {
        this.list = node;
        this._size++;
      } else {
        var currentNode = this.list;

        while (currentNode.next !== null) {
          currentNode = currentNode.next;
        }

        currentNode.next = node;
        this._size++;
      }
    }
    /**
     * addToEnd()
     * ----------
     * Adds node to the end of the singly linked list. Alias for add() method.
     *
     * @alias (add)
     *
     * @param {SinglyLinkedListNode} node - an instance of the SinglyLinkedListNode class
     */

  }, {
    key: "addToEnd",
    value: function addToEnd(node) {
      this.add(node);
    }
    /**
     * get()
     * -----
     * Gets a value using the passed in index. If no index is passed into as a paramenter the first element will be selected.
     *
     * @param {index} number - the index that will be used to select an element.
     */

  }, {
    key: "get",
    value: function get() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!this.list) return null;
      if (index > this._size) return null;
      var currentNode = this.list;
      var currentIndex = 0;

      while (currentIndex !== index) {
        currentNode = currentNode.next;
        currentIndex++;
      }

      return currentNode.value;
    }
    /**
     * getFirst()
     * -----
     * Gets the first value of the list.
     */

  }, {
    key: "getFirst",
    value: function getFirst() {
      return this.get();
    }
    /**
     * getLast()
     * -----
     * Gets the last value of the list.
     */

  }, {
    key: "getLast",
    value: function getLast() {
      return this.get(this._size - 1);
    }
    /**
     * size()
     * ----------
     * Returns the size of the singly linked list.
     *
     * @returns {number} - the size of the singly linked list.
     */

  }, {
    key: "size",
    value: function size() {
      return this._size;
    }
    /**
     * clear()
     * -------
     * Clears out the singly linked list.
     */

  }, {
    key: "clear",
    value: function clear() {
      this.list = null;
      this._size = 0;
    }
    /**
     * toString()
     * ----------
     * Print out the contents of the singly linked list to the console. Good to use for debugging.
     */

  }, {
    key: "toString",
    value: function toString() {
      if (!this.list) return;
      var currentNode = this.list;

      while (currentNode.next !== null) {
        console.log(currentNode);
        console.log('\n');
        currentNode = currentNode.next;
      }

      console.log(currentNode);
    }
  }]);

  return SinglyLinkedList;
}();

exports["default"] = SinglyLinkedList;