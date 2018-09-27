
function bfs(rootNode, vertices, edges){
 
}

function findAdjacentNodes(node, vertices, edges) {
    let thisNode = vertices[node]
    let adjacents = []
    edges.map(edge => {
        if(edge[0] === node) {
          adjacents.push(vertices.find((e) => {return e.name === edge[1]}))
        } else if(edge[1] === node) {
          adjacents.push(vertices.find((e) => {return e.name === edge[0]}))
        }
    })
    return adjacents.filter(adj => {return adj.distance != 0})
}