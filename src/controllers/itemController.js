import Item from "../models/Item.js";

const getItem = async (req, res) => {
  try {
    let id_item = req.params.id_item;
    if (!id_item) {
      let response = await Item.findAll()
      if (!response) {
        return res.status(500).send({
          type: 'error',
          message: 'Não foi possível encontrar os registros de Item',
        })
      }
      return res.status(200).send({
        type: 'success',
        message: 'Registros de Item recuperados com sucesso!',
        data: response
      })
    }
    let response = await Item.findOne({
      where: {
        id_item
      }
    })
    if (!response) {
      return res.status(500).send({
        type: 'error',
        message: `Não foi possível encontrar o registro de Item com o Id ${id_item}`,
      })
    }
    return res.status(200).send({
      type: 'success',
      message: `Registro de Item ${id_item} recuperado com sucesso!`,
      data: response
    })
  } catch (error) {
    return res.status(500).send({
      type: 'error',
      message: error.message,
    })
  }
}

const createItem = async (req, res) => {
    try {
      const { descricao, encontrado } = req.body;
      let response = await Item.create({
        descricao,
        encontrado
      })
      if (!response) {
        return res.status(500).send({
          type: 'error',
          message: 'Não foi possível registrar o Item',
        })
      }
      return res.status(200).send({
        type: 'success',
        message: 'Item registrado com sucesso!',
        data: response
      })
    } catch (error) {
      return res.status(500).send({
        type: 'error',
        message: error.message,
      })
    }
}

const deleteItem = async (req, res) => {
    try {
      let id_item = req.params.id_item;
      if (!id_item) {
        return res.status(404).send({
          type: 'error',
          message: 'Id não informado para deleção de Item',
        })
      }
      let item = await Item.findOne({
        where: {
          id_item
        }
      })
      if (!item) {
        return res.status(404).send({
          type: 'error',
          message: `Registro de Item não encontrado com o Id ${id_item}`,
        })
      }
      let response = await item.destroy()
      if (!response) {
        return res.status(500).send({
          type: 'error',
          message: `Não foi possível deletar o Item com Id ${id_item}`,
        })
      }
      return res.status(200).send({
        type: 'success',
        message: `Registro ${id_item} de Item deletado com sucesso!`,
      })
    } catch (error) {
      return res.status(500).send({
        type: 'error',
        message: error.message,
      })
    }
}

const updateItem = async (req, res) => {
    try {
      let id_item = req.params.id_item;
      let { descricao, encontrado } = req.body;
      let item = await Item.findOne({
        where: {
          id_item
        }
      })
      if (!item) {
        return res.status(404).send({
          type: 'error',
          message: `Registro de Item não encontrado com o Id ${id_item}`,
        })
      }
      let response = await item.update({
        descricao,
        encontrado
      })
      if (!response) {
        return res.status(500).send({
          type: 'error',
          message: `Não foi possível atualizar o Item de Id ${id_item}`,
        })
      }
      return res.status(200).send({
        type: 'success',
        message: `Registro ${id_item} de Item atualizado com sucesso!`,
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
    getItem,
    createItem,
    deleteItem,
    updateItem
}