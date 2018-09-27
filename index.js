
function bfs(rootNode, vertices, edges){
    let queue = [rootNode]
    let finalList = []
    rootNode.distance = 0
        while(queue.length > 0) {
            let newNode = queue.pop()
            let adjacentNodes = findAdjacentNodes(newNode.name, vertices, edges)
            console.log('q:', queue, 'adjNodes', adjacentNodes)
            queue = queue.concat(adjacentNodes)
            markDistanceAndPredecessor(newNode, adjacentNodes)
            finalList.push(newNode)
        }
    return finalList;
}

function findAdjacentNodes(node, vertices, edges) {
    let adjacents = []
    edges.map(edge => {
        if(edge[0] === node) {
          adjacents.push(vertices.find((e) => {return e.name === edge[1]}))
        } else if(edge[1] === node) {
          adjacents.push(vertices.find((e) => {return e.name === edge[0]}))
        }
    })
    return adjacents.filter(adj => adj.distance === null && adj.predecessor === null )
}

function markDistanceAndPredecessor(firstNode, adjacentNodes) {
    adjacentNodes.forEach(node => {
        node.distance = 1 + firstNode.distance
        node.predecessor = firstNode
    })
}