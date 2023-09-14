import posicaoRoute from "./posicaoRoute.js";
import rankingRoute from "./rankingRoute.js";
import itemRoute from "./itemRoute.js";
import tarefaRoute from "./tarefaRoute.js";

function Routes(app) {
    posicaoRoute(app)
    rankingRoute(app)
    itemRoute(app)
    tarefaRoute(app)
}

export default Routes;