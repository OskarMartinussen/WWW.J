import * as extension from "./utils/extension";

function handleMessages(request, sender, sendResponse) {
  console.log(request);
}

extension.onMessage(handleMessages);