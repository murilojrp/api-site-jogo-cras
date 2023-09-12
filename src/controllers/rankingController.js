import Ranking from "../models/ranking.js";

const getranking = async (req, res) => {
  try {
    let id_ranking = req.params.id_ranking;
    if (!id_ranking) {
      let response = await ranking.findAll()
      if (!response) {
        return res.status(500).send({
          type: 'error',
          message: 'Não foi possível encontrar os registros de posição',
        })
      }
      return res.status(200).send({
        type: 'success',
        message: 'Registros de posição recuperados com sucesso!',
        data: response
      })
    }
    let response = await ranking.findOne({
      where: {
        id_ranking
      }
    })
    if (!response) {
      return res.status(500).send({
        type: 'error',
        message: 'Não foi possível encontrar o registro de posição',
      })
    }
    return res.status(200).send({
      type: 'success',
      message: 'Registro de posição recuperado com sucesso!',
      data: response
    })
  } catch (error) {
    return res.status(500).send({
      type: 'error',
      message: error.message,
    })
  }
}

const createranking = async (req, res) => {
    try {
      const { vetorXY } = req.body;
      let response = await ranking.create({
        vetorXY
      })
      if (!response) {
        return res.status(500).send({
          type: 'error',
          message: 'Não foi possível registrar a posição',
        })
      }
      return res.status(200).send({
        type: 'success',
        message: 'Posição registrada com sucesso!',
        data: response
      })
    } catch (error) {
      return res.status(500).send({
        type: 'error',
        message: error.message,
      })
    }
}

const deleteranking = async (req, res) => {
    try {
      let id_ranking = req.params.id_ranking;
      if (!id_ranking) {
        return res.status(404).send({
          type: 'error',
          message: 'Id não informado para deleção da posição',
        })
      }
      let ranking = await ranking.findOne({
        where: {
          id_ranking
        }
      })
      if (!ranking) {
        return res.status(404).send({
          type: 'error',
          message: 'Registro de posição não encontrado com este Id',
        })
      }
      let response = await ranking.destroy()
      if (!response) {
        return res.status(500).send({
          type: 'error',
          message: 'Não foi possível deletar a posição',
        })
      }
      return res.status(200).send({
        type: 'success',
        message: 'Posição deletada com sucesso!',
      })
    } catch (error) {
      return res.status(500).send({
        type: 'error',
        message: error.message,
      })
    }
}

const updateranking = async (req, res) => {
    try {
      let id_ranking = req.params.id_ranking;
      let { vetorXY } = req.body;
      let ranking = await ranking.findOne({
        where: {
          id_ranking
        }
      })
      if (!ranking) {
        return res.status(404).send({
          type: 'error',
          message: 'Registro de posição não encontrado com este Id',
        })
      }
      let response = await ranking.update({
        vetorXY
      })
      if (!response) {
        return res.status(500).send({
          type: 'error',
          message: 'Não foi possível atualizar o ranking',
        })
      }
      return res.status(200).send({
        type: 'success',
        message: 'Posição atualizada com sucesso!',
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
    getranking,
    createranking,
    deleteranking,
    updateranking
}
