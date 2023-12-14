import Ranking from "../models/ranking.js";

const getRanking = async (req, res) => {
  try {
    let id_ranking = req.params.id_ranking;
    if (!id_ranking) {
      let response = await Ranking.findAll(
        {
          order: [
            ['pontuacao', 'DESC']
          ]
        }
      )
      if (!response) {
        return res.status(500).send({
          type: 'error',
          message: 'Não foi possível encontrar os registros de Ranking',
        })
      }
      return res.status(200).send({
        type: 'success',
        message: 'Registros de Ranking recuperados com sucesso!',
        data: response
      })
    }
    let response = await Ranking.findOne({
      where: {
        id_ranking
      }
    })
    if (!response) {
      return res.status(500).send({
        type: 'error',
        message: `Não foi possível encontrar o registro de ranking com o Id ${id_ranking}`,
      })
    }
    return res.status(200).send({
      type: 'success',
      message: `Registro ${id_ranking} de Ranking recuperado com sucesso!`,
      data: response
    })
  } catch (error) {
    return res.status(500).send({
      type: 'error',
      message: error.message,
    })
  }
}

const createRanking = async (req, res) => {
    try {
      return;
      const { nome_jogador, pontuacao } = req.body;
      let response = await Ranking.create({
        nome_jogador,
        pontuacao
      })
      if (!response) {
        return res.status(500).send({
          type: 'error',
          message: 'Não foi possível registrar no Ranking',
        })
      }
      return res.status(200).send({
        type: 'success',
        message: 'Registro em Ranking realizado com sucesso!',
        data: response
      })
    } catch (error) {
      return res.status(500).send({
        type: 'error',
        message: error.message,
      })
    }
}

const deleteRanking = async (req, res) => {
    try {
      let id_ranking = req.params.id_ranking;
      if (!id_ranking) {
        return res.status(404).send({
          type: 'error',
          message: 'Id não informado para deleção de Ranking',
        })
      }
      let ranking = await Ranking.findOne({
        where: {
          id_ranking
        }
      })
      if (!ranking) {
        return res.status(404).send({
          type: 'error',
          message: `Registro de Ranking não encontrado com o Id ${id_ranking}`,
        })
      }
      let response = await ranking.destroy()
      if (!response) {
        return res.status(500).send({
          type: 'error',
          message: 'Não foi possível deletar o registro em Ranking',
        })
      }
      return res.status(200).send({
        type: 'success',
        message: `Registro ${id_ranking} em Ranking deletado com sucesso!`,
      })
    } catch (error) {
      return res.status(500).send({
        type: 'error',
        message: error.message,
      })
    }
}

const updateRanking = async (req, res) => {
    try {
      let id_ranking = req.params.id_ranking;
      let { nome_jogador, pontuacao } = req.body;
      let ranking = await Ranking.findOne({
        where: {
          id_ranking
        }
      })
      if (!ranking) {
        return res.status(404).send({
          type: 'error',
          message: `Registro de Ranking não encontrado com o Id ${id_ranking}`,
        })
      }
      let response = await ranking.update({
        nome_jogador,
        pontuacao
      })
      if (!response) {
        return res.status(500).send({
          type: 'error',
          message: 'Não foi possível atualizar o registro de Ranking',
        })
      }
      return res.status(200).send({
        type: 'success',
        message: `Registro ${id_ranking} de Ranking atualizado com sucesso!`,
        data: response
      })
    } catch (error) {
      return res.status(500).send({
        type: 'error',
        message: error.message,
      })
    }
  }


export default {
  getRanking,
  createRanking,
  deleteRanking,
  updateRanking
}
