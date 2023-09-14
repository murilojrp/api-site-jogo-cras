import Tarefa from "../models/Tarefa.js";

const getTarefa = async (req, res) => {
  try {
    let id_tarefa = req.params.id_tarefa;
    if (!id_tarefa) {
      let response = await Tarefa.findAll()
      if (!response) {
        return res.status(500).send({
          type: 'error',
          message: 'Não foi possível encontrar os registros de tarefa',
        })
      }
      return res.status(200).send({
        type: 'success',
        message: 'Registros de tarefa recuperados com sucesso!',
        data: response
      })
    }
    let response = await Tarefa.findOne({
      where: {
        id_tarefa
      }
    })
    if (!response) {
      return res.status(500).send({
        type: 'error',
        message: `Não foi possível encontrar o registro de tarefa com o Id ${id_tarefa}`,
      })
    }
    return res.status(200).send({
      type: 'success',
      message: `Registro de tarefa ${id_tarefa} recuperado com sucesso!`,
      data: response
    })
  } catch (error) {
    return res.status(500).send({
      type: 'error',
      message: error.message,
    })
  }
}

const createTarefa = async (req, res) => {
    try {
      const { descricao, finalizada, titulo } = req.body;
      let response = await Tarefa.create({
        descricao,
        finalizada,
        titulo
      })
      if (!response) {
        return res.status(500).send({
          type: 'error',
          message: 'Não foi possível registrar a tarefa',
        })
      }
      return res.status(200).send({
        type: 'success',
        message: 'Tarefa registrada com sucesso!',
        data: response
      })
    } catch (error) {
      return res.status(500).send({
        type: 'error',
        message: error.message,
      })
    }
}

const deleteTarefa = async (req, res) => {
    try {
      let id_tarefa = req.params.id_tarefa;
      if (!id_tarefa) {
        return res.status(404).send({
          type: 'error',
          message: 'Id não informado para deleção da tarefa',
        })
      }
      let tarefa = await Tarefa.findOne({
        where: {
          id_tarefa
        }
      })
      if (!tarefa) {
        return res.status(404).send({
          type: 'error',
          message: `Registro de tarefa não encontrado com o Id ${id_tarefa}`,
        })
      }
      let response = await tarefa.destroy()
      if (!response) {
        return res.status(500).send({
          type: 'error',
          message: `Não foi possível deletar a tarefa com Id ${id_tarefa}`,
        })
      }
      return res.status(200).send({
        type: 'success',
        message: `Registro ${id_tarefa} de Tarefa deletado com sucesso!`,
      })
    } catch (error) {
      return res.status(500).send({
        type: 'error',
        message: error.message,
      })
    }
}

const updateTarefa = async (req, res) => {
    try {
      let id_tarefa = req.params.id_tarefa;
      let { descricao, finalizada, titulo } = req.body;
      let tarefa = await Tarefa.findOne({
        where: {
          id_tarefa
        }
      })
      if (!tarefa) {
        return res.status(404).send({
          type: 'error',
          message: `Registro de tarefa não encontrado com o Id ${id_tarefa}`,
        })
      }
      let response = await tarefa.update({
        descricao,
        finalizada,
        titulo
      })
      if (!response) {
        return res.status(500).send({
          type: 'error',
          message: `Não foi possível atualizar a tarefa de Id ${id_tarefa}`,
        })
      }
      return res.status(200).send({
        type: 'success',
        message: `Registro ${id_tarefa} de Tarefa atualizado com sucesso!`,
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
    getTarefa,
    createTarefa,
    deleteTarefa,
    updateTarefa
}