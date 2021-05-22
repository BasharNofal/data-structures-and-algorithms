'use strict';

const { Vertex, Graph } = require('../graph');

describe('=============================GRAPH=============================', () => {
    let graph = new Graph(),
        newVertex1 = new Vertex(1),
        newVertex2 = new Vertex(100),
        newVertex3 = new Vertex(30),
        newVertex4 = new Vertex(50),
        doesNotExistNode = new Vertex('any value');

    graph.addVertex(newVertex1);
    graph.addVertex(newVertex2);
    graph.addVertex(newVertex3);
    graph.addVertex(newVertex4);

    graph.addDirectedEdge(newVertex1, newVertex2);
    graph.addDirectedEdge(newVertex2, newVertex3, 1);
    graph.addDirectedEdge(newVertex3, newVertex4, 10);
    graph.addDirectedEdge(newVertex4, newVertex1, 5);

    it('Should add vertex to the graph', () => {

        let newVertex5 = new Vertex(15);


        graph.addVertex(newVertex5);

        expect(graph._adjacencyList.has(newVertex5)).toBeTruthy();
        expect(graph._adjacencyList.has(newVertex2)).toBeTruthy();
        expect(graph._adjacencyList.has(doesNotExistNode)).toBeFalsy();
    });

    it('Should add edge to the graph', () => {
        expect(graph._adjacencyList.get(newVertex1)[0]).toEqual({ "vertex": { "value": newVertex2.value }, "weight": 0 });
        expect(graph._adjacencyList.get(newVertex2)[0]).toEqual({ "vertex": { "value": newVertex3.value }, "weight": 1 });
        expect(graph._adjacencyList.get(newVertex3)[0]).toEqual({ "vertex": { "value": newVertex4.value }, "weight": 10 });
        expect(graph._adjacencyList.get(newVertex4)[0]).toEqual({ "vertex": { "value": newVertex1.value }, "weight": 5 });
        expect(graph._adjacencyList.get(newVertex1)[0].weight).toEqual(0);
        expect(graph._adjacencyList.get(newVertex2)[0].weight).toEqual(1);
        expect(graph._adjacencyList.get(newVertex3)[0].weight).toEqual(10);
        expect(graph._adjacencyList.get(newVertex4)[0].weight).toEqual(5);
        expect(function () { graph.addDirectedEdge(doesNotExistNode, newVertex1) }).toThrow(new Error('INVALID NODE'));
    });

    it('Should return neighbors of a vertex', () => {

        expect(graph.getNeighbors(newVertex1)[0].vertex).toEqual(newVertex2);
        expect(graph.getNeighbors(newVertex2)[0].vertex).toEqual(newVertex3);
        expect(graph.getNeighbors(newVertex3)[0].vertex).toEqual(newVertex4);
        expect(graph.getNeighbors(newVertex4)[0].vertex).toEqual(newVertex1);
        expect(function () { graph.getNeighbors(doesNotExistNode) }).toThrow(new Error('__ERROR__ Invalid Vertex', doesNotExistNode));
    });

    it('Should return all nodes in the graph', () => {
        expect(graph.getNodes()).toEqual([{"value": 1}, {"value": 100}, {"value": 30}, {"value": 50}, {"value": 15}]);
    });

    it('Should return the number of vertices in the graph', () => {
        expect(graph.size()).toEqual(5);
    });
});