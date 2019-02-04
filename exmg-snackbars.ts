import '@polymer/paper-icon-button/paper-icon-button';

import '@polymer/paper-toast';

function _getToastContainerNode(): Node {
  const toastContainerNodeId = 'paper-toast-container';

  const existingNode = document.querySelector('#' + toastContainerNodeId);

  if (existingNode) {
    return existingNode;
  }

  let toastContainerNode = document.createElement('div');
  toastContainerNode.id = toastContainerNodeId;
  document.body.appendChild(toastContainerNode);

  return toastContainerNode;
}

export function showSnackBar(message: string) {
  const toastContainerNode = _getToastContainerNode();

  let toastNode = document.createElement('paper-toast');
  toastContainerNode.appendChild(toastNode);

  toastNode.text = message;
  toastNode.opened = true;

  (new MutationObserver((_mutationsList: MutationRecord[], observer: MutationObserver) => {
    if (!toastNode.opened) {
      observer.disconnect();
      toastContainerNode.removeChild(toastNode);
    }
  })).observe(toastNode, { attributes: true });
}
