function maxDepth(root) {
  let depth = 0;
  if (!root.value) {
    return depth;
  }

  depth++; // increment 1 por tem um nó nesse nível
  if (!root.left && !root.right) return depth; // se não tiver mais nós abaixo

  const accLeft = maxDepth(root.left); // verifica a profundidade do lado esquerdo
  const accRight = maxDepth(root.right); // e do lado direito
  depth += accLeft >= accRight ? accLeft : accRight; // soma o maior

  return depth; // retorna a profundidade total
}

function TreeNode(data) {
  this.value = data;
  this.left = null;
  this.right = null;
}

function findNode(node, value) {
  // função recursiva
  if (node.value == value) {
    return node; // se o valor procurado for a raíz, não muda nada
  } else {
    if (node.left) {
      // se já tiver um valor no galho, procura mais acima
      const leftValue = findNode(node.left, value);
      if (leftValue) return leftValue; // se encontrou, retorna
    }

    if (node.right) {
      // se já tiver um valor no galho, procura mais acima
      const rightValue = findNode(node.right, value);
      if (rightValue) return rightValue; // se encontrou, retorna
    }
  }

  return null;
}

function deserialize(queue) {
  // exemplo [3,9,20,null,null,15,7]
  if (queue.length == 1 && queue[0] == null) {
    return null;
  }

  let tree = new TreeNode(queue[0]);
  const cloneQueue = [...queue]; // apenas clone o array recebido
  cloneQueue.shift(); // remove o primeiro item do array, ficando [9,20,null,null,15,7]

  for (let i = 0; i < queue.length; ++i) {
    const node = findNode(tree, queue[i]); // i = 0 -> queue[i] = 3, i = 1 -> queue[i] = 9...

    if (node) {
      // o valor já está na árvore? ex: 3
      const leftValue = cloneQueue.shift(); // remove primeiro elemento e o retorna = 9
      const rightValue = cloneQueue.shift(); // remove primeiro elemento e o retorna = 20

      if (leftValue) node.left = new TreeNode(leftValue); // novo galho iniciando com 9
      if (rightValue) node.right = new TreeNode(rightValue); // novo galho iniciando com 20
    }
    // se não encontrou o node, não faz nada, o galho acaba
  } // faz o mesmo processo, iniciando com [9,20,null,null,15,7]

  // retorna a árvore inteira
  return tree;
}

function buildQueue(raw) {
  // transforma de string pra valores JS
  const queue = [];
  for (let i = 0; i < raw.length; ++i) {
    queue.push(raw[i] !== "null" ? parseInt(raw[i]) : null);
  }

  return queue;
}

// read inputs
const input = "3,9,20,null,null,15,7";
const queue = buildQueue(input.split(","));
const tree = deserialize(queue);

//solution
const output = maxDepth(tree);
console.log("DEPTH: ", output);
