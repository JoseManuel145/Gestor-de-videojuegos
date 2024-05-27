import Node from "./Node.js";

class BST {
    #root;

    constructor() {
        this.#root = null
    }
    add_init(value) {
        if (this.#root === null) {
            this.#root = new Node(value)
            return this.#root != null
        } else
            return this.add(this.#root, value)
    }
    add(node, value) {
        if (value.tittle < node.value.tittle) {
            if (node.left == null) {
                node.left = new Node(value)
                if (node.left != null)
                    return true
            } else
                return this.add(node.left, value)
        } else {
            if (node.right == null) {
                node.right = new Node(value)
                return node.right != null
            } else
                return this.add(node.right, value)
        }
    }
    search_init(value) {
        if (this.#root === null) {
            return null
        }
        else
            return this.search(this.#root, value)
    }
    search(node, value) {
        if (node.value.tittle === value)
            return node.value
        else if (value < node.value.tittle)
            return this.search(node.left, value)
        else
            return this.search(node.right, value)
    }
    route_init(callback) {
        return this.route(this.#root, callback)
    }
    route(node, callback) {
        if (node === null) {
            return
        } else {
            //if(callback) callback(node.value) pre orden
            this.route(node.left, callback)

            if (callback) callback(node.value) //in order

            this.route(node.right, callback)
            //if(callback) callback(node.value)  post orden
        }
    }
    findMin_init() {
        return this.findMin(this.#root)
    }
    findMin(node) {
        if (node === null)
            return null
        else if (node.left == null)
            return node.value
        else
            return this.findMin(node.left)
    }
    findMax_init() {
        return this.findMax(this.#root)
    }
    findMax(node) {
        if (node === null)
            return null
        else if (node.right == null)
            return node.value
        else
            return this.findMax(node.right)
    }
}
export default BST