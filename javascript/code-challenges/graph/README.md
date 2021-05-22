# Graph

**Graph:** is a non-linear data structure which as is a collection of nodes that's connected together by lines called edges.

<hr>

## Challenge

* Node can be successfully added to the graph.
* An edge can be successfully added to the graph.
* A collection of all nodes can be properly retrieved from the graph.
* All appropriate neighbors can be retrieved from the graph.
* Neighbors are returned with the weight between nodes included.
* The proper size is returned, representing the number of nodes in the graph.
* A graph with only one node and edge can be properly returned.
* An empty graph properly returns null.

<hr>

## Approach & Efficiency

* At first, when declaring new graph it will create new instance of `Map()` which is called `_adjacencyList`.
* When adding new vertex using `addVertex` method which takes vertex as an argument, it will add new vertex to `_adjacencyList` with an empty array which represents the array of edges.
* For `addDirectedEdge` method which takes start vertex, end vertex, and weight of the edge as an argument, it will check if both vertices exist in `_adjacencyList`, if not it will throw an error, else it will create new instance of `Edge()` class, which takes the end vertex and the weight as an arguments, then it will add this instance to the arr of edges of the start vertex.
* `getNeighbors` method which takes a vertex as an argument, it will check if that vertex exists in `_adjacencyList`, if not it will throw an error, else using the method `get` which is a built in method for `Map()`, it takes vertex as an argument (key value) an it returns array of edges.
* `getNodes` which returns all vertices in graph, it will loop over each element in `_adjacencyList` and using the method `entries` it will return all the nodes and add them to a set, then return array out of that set.
* `size` will return number of vertices in the graph using `size` built in method of `Map()`.

### Big O

**Space:** O(n)
**Time:** O(n)