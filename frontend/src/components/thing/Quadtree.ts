

// Used to hold details of a point
class Point {
    x:number;
    y:number
    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }
}

 
// The objects that we want stored in the quadtree
class Node2 {
    pos:Point;
    data:any;
    constructor(pos:Point, data:any) {
        this.pos = pos;
        this.data = data;
    }
}
 
// The main quadtree class
export class Quad {
    topLeft:Point;
    botRight:Point;
    n:Node2|null;
    topLeftTree:Quad|null;
    topRightTree:Quad|null;
    botLeftTree:Quad|null;
    botRightTree:Quad|null;
    constructor(topL:Point, botR:Point) {
        this.topLeft = topL;
        this.botRight = botR;
        this.n = null;
        this.topLeftTree = null;
        this.topRightTree = null;
        this.botLeftTree = null;
        this.botRightTree = null;
    }
 
    // Insert a node into the quadtree
    insert(node:Node2) {
        if (node === null) {
            return;
        }
 
        // Current quad cannot contain it
        if (!this.inBoundary(node.pos)) {
            return;
        }
 
        // We are at a quad of unit area
        // We cannot subdivide this quad further
        if (Math.abs(this.topLeft.x - this.botRight.x) <= 1 && Math.abs(this.topLeft.y - this.botRight.y) <= 1) {
            if (this.n === null) {
                this.n = node;
            }
            return;
        }
 
        if ((this.topLeft.x + this.botRight.x) / 2 >= node.pos.x) {
            // Indicates topLeftTree
            if ((this.topLeft.y + this.botRight.y) / 2 >= node.pos.y) {
                if (this.topLeftTree === null) {
                    this.topLeftTree = new Quad(this.topLeft, new Point((this.topLeft.x + this.botRight.x) / 2, (this.topLeft.y + this.botRight.y) / 2));
                }
                this.topLeftTree.insert(node);
            }
            // Indicates botLeftTree
            else {
                if (this.botLeftTree === null) {
                    this.botLeftTree = new Quad(new Point(this.topLeft.x, (this.topLeft.y + this.botRight.y) / 2), new Point((this.topLeft.x + this.botRight.x) / 2, this.botRight.y));
                }
                this.botLeftTree.insert(node);
            }
        } else {
            // Indicates topRightTree
            if ((this.topLeft.y + this.botRight.y) / 2 >= node.pos.y) {
                if (this.topRightTree === null) {
                    this.topRightTree = new Quad(new Point((this.topLeft.x + this.botRight.x) / 2, this.topLeft.y), new Point(this.botRight.x, (this.topLeft.y + this.botRight.y) / 2));
                }
                this.topRightTree.insert(node);
            }
            // Indicates botRightTree
            else {
                if (this.botRightTree === null) {
                    this.botRightTree = new Quad(new Point((this.topLeft.x + this.botRight.x) / 2, (this.topLeft.y + this.botRight.y) / 2), this.botRight);
                }
                this.botRightTree.insert(node);
            }
        }
    }
 
    // Find a node in a quadtree
    search(p:Point):Node2|0 {
        // Current quad cannot contain it
        if (!this.inBoundary(p)) {
            return 0;  // Return 0 if point is not found
        }
 
        // We are at a quad of unit length
        // We cannot subdivide this quad further
        if (this.n !== null) {
            return this.n;
        }
 
        if ((this.topLeft.x + this.botRight.x) / 2 >= p.x) {
            // Indicates topLeftTree
            if ((this.topLeft.y + this.botRight.y) / 2 >= p.y) {
                if (this.topLeftTree === null) {
                    return 0;
                }
                return this.topLeftTree.search(p);
            }
            // Indicates botLeftTree
            else {
                if (this.botLeftTree === null) {
                    return 0;
                }
                return this.botLeftTree.search(p);
            }
        } else {
            // Indicates topRightTree
            if ((this.topLeft.y + this.botRight.y) / 2 >= p.y) {
                if (this.topRightTree === null) {
                    return 0;
                }
                return this.topRightTree.search(p);
            }
            // Indicates botRightTree
            else {
                if (this.botRightTree === null) {
                    return 0;
                }
                return this.botRightTree.search(p);
            }
        }
    }
 
    // Check if current quadtree contains the point
    inBoundary(p:Point) {
        return p.x >= this.topLeft.x && p.x <= this.botRight.x && p.y >= this.topLeft.y && p.y <= this.botRight.y;
    }
}