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
            const promise1 = new Promise((resolve, reject) => {
                var count = 0;
                Object.keys(this.attributes).forEach((element, index) => {
                    var type = typeof this.attributes[element];
                    if (type === 'object') {
                        if (Array.isArray(this.attributes[element])) {
                            var createData = [];
                            this.attributes[element].forEach((data, index) => {
                                axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + element, {
                                    selector: "create",
                                    criteria: null,
                                    initialValues: data,
                                    valuesToSet: null
                                }).then(res => {
                                    createData.push(res.data.id);
                                }).catch(err => {
                                    console.log(err);
                                });
                                if (this.attributes[element].length - 1 === index) {
                                    this.attributes[element] = createData;
                                    count++;
                                }
                            });
                        } else {
                            axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + element, {
                                selector: "create",
                                criteria: null,
                                initialValues: this.attributes[element],
                                valuesToSet: null
                            }).then(res => {
                                this.attributes[element] = res.data.id;
                                count++;
                            }).catch(err => {
                                console.log(err);
                            });
                        }
                    } else {
                        count++;
                    }
                    if (count === Object.keys(this.attributes).length - 1) {
                        resolve(this.attributes);
                    }
                });
            });
            const promise2 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, 200);
            });

            Promise.all([promise1, promise2]).then((values) => {
                axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + this.model, {
                    selector: "create",
                    criteria: null,
                    initialValues: this.attributes,
                    valuesToSet: null
                }).then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                });

            });
        });
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
                    element.update = function () {
                        console.log("Update");
                    }
                    element.destroy = function () {
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
                res.data.update = function () {
                    console.log("Update");
                }
                res.data.destroy = function () {
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
        return new Promise(async (resolve, reject) => {
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
        });
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