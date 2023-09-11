import Posicao from "../models/Posicao.js";

const getPosicao = async (req, res) => {
  try {
    let id_posicao = req.params.id_posicao;
    if (!id_posicao) {
      let response = await Posicao.findAll()
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
    let response = await Posicao.findOne({
      where: {
        id_posicao
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

const createPosicao = async (req, res) => {
    try {
      const { vetorXY } = req.body;
      let response = await Posicao.create({
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

const deletePosicao = async (req, res) => {
    try {
      let id_posicao = req.params.id_posicao;
      if (!id_posicao) {
        return res.status(404).send({
          type: 'error',
          message: 'Id não informado para deleção da posição',
        })
      }
      let posicao = await Posicao.findOne({
        where: {
          id_posicao
        }
      })
      if (!posicao) {
        return res.status(404).send({
          type: 'error',
          message: 'Registro de posição não encontrado com este Id',
        })
      }
      let response = await Posicao.destroy()
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

const updatePosicao = async (req, res) => {
    try {
      let id_posicao = req.params.id_posicao;
      let { vetorXY } = req.body;
      let posicao = await Posicao.findOne({
        where: {
          id_posicao
        }
      })
      if (!posicao) {
        return res.status(404).send({
          type: 'error',
          message: 'Registro de posição não encontrado com este Id',
        })
      }
      let response = await posicao.update({
        vetorXY
      })
      if (!response) {
        return res.status(500).send({
          type: 'error',
          message: 'Não foi possível atualizar a posição',
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
    getPosicao,
    createPosicao,
    deletePosicao,
    updatePosicao
}