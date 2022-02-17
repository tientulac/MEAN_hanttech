const Repository = require('../repositories/repository');
const user = require('../../models/inputModels/user');

module.exports = new class extends Repository {
    async RfindById(id) {
        return user.findById({ _id: id }).lean();
    }
    async Rfind() {
        return user.find().lean();
    }
    async RfindOne(req) {
        return user.findOne(req).lean();
    }
    async RinsertOne(req) {
        return user.create(req).then();
    }
    async RdeleteOne(id) {
        return user.findByIdAndRemove(id).lean();
    }
    async RupdateOne(id, req) {
        return user.findByIdAndUpdate(id, { $set: req }).lean();
    }
}