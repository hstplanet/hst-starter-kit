import axios from 'axios';
import boot from 'app/hst.conf'
export default class IStore {

    model = "";
    path = "http://server.hstplanet.com/api/store";
    projectId = boot.hstcloud.projectId.split('-')[1];

    constructor(model) {
        this.model = model;
    }


    addToCollection() {
        return this.attributes;
    }

    archive(criteria) {

    }

    archiveOne(criteria) {

    }

    avg(numericAttrName, criteria) {

    }

    count(criteria) {
        return new Promise((resolve, reject) => {
            if (criteria === undefined) {
                criteria = {};
            }
            axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + this.model, {
                selector: "count",
                criteria: criteria,
                initialValues: null,
                valuesToSet: null
            }).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            });
        })
    }

    create() {
        return new Promise((resolve, reject) => {
            axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + this.model, {
                selector: "create",
                criteria: null,
                initialValues: this.attributes,
                valuesToSet: null
            }).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            });
        })
    }

    createEach(initialValues) {

    }

    destroy(criteria) {
        return new Promise((resolve, reject) => {
            if (criteria === undefined) {
                criteria = {};
            }
            axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + this.model, {
                selector: "destroy",
                criteria: criteria,
                initialValues: null,
                valuesToSet: null
            }).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            });
        })
    }

    destroyOne(criteria) {
        return new Promise((resolve, reject) => {
            if (criteria === undefined) {
                criteria = {};
            }
            axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + this.model, {
                selector: "destroy",
                criteria: criteria,
                initialValues: null,
                valuesToSet: null
            }).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            });
        })
    }

    find(criteria) {
        return new Promise((resolve, reject) => {
            if (criteria === undefined) {
                criteria = {};
            }
            axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + this.model, {
                selector: "find",
                criteria: criteria,
                initialValues: null,
                valuesToSet: null
            }).then(res => {
                res.data.forEach(element => {
                    element.update = function() {
                        console.log("Update");
                    }
                    element.destroy = function() {
                        console.log("Destroy");
                    }
                });
                resolve(res.data);
            }).catch(err => {
                reject(err);
            });
        })
    };

    findOne(criteria) {
        return new Promise((resolve, reject) => {
            if (criteria === undefined) {
                criteria = {};
            }
            axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + this.model, {
                selector: "findOne",
                criteria: criteria,
                initialValues: null,
                valuesToSet: null
            }).then(res => {
                res.data.update = function() {
                    console.log("Update");
                }
                res.data.destroy = function() {
                    console.log("Destroy");
                }
                resolve(res.data);

            }).catch(err => {
                reject(err);
            });
        })
    }

    findOrCreate(criteria, initialValues) {

    }

    getDatastore() {

    }

    removeFromCollection(parentId, association) {

    }

    replaceCollection(parentId, association) {

    }

    stream(criteria) {

    }

    sum(numericAttrName, criteria) {

    }

    update(criteria) {
        return new Promise((resolve, reject) => {
            if (criteria === undefined) {
                criteria = {};
            }
            axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + this.model, {
                selector: "update",
                criteria: criteria,
                initialValues: null,
                valuesToSet: this.attributes
            }).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            });
        })
    }

    updateOne(criteria, valuesToSet) {

    }

    validate(attrName, value) {

    }

    getModel() {
        return this.model;
    }

    setModel(model) {
        this.model = model;
    }

}