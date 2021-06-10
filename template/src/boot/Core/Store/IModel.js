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
                    element.update = () => {
                        return new Promise((resolve, reject) => {
                            this.update({ id: element.id }).then(res => {
                                resolve(res)
                            }).catch(err => {
                                reject(err);
                            });
                        });
                    }
                    element.destroy = () => {
                        return new Promise((resolve, reject) => {
                            this.destroy({ id: element.id }).then(res => {
                                resolve(res)
                            }).catch(err => {
                                reject(err);
                            });
                        });
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
                res.data.update = () => {
                    return new Promise((resolve, reject) => {
                        console.log("Update");
                        this.update({ id: res.data.id }).then(res => {
                            console.log("Update : ", res);
                            resolve(res)
                        }).catch(err => {
                            reject(err);
                        });
                    });
                }
                res.data.destroy = () => {
                    return new Promise((resolve, reject) => {
                        this.destroy({ id: res.data.id }).then(res => {
                            resolve(res)
                        }).catch(err => {
                            reject(err);
                        });
                    });
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
                valuesToSet: data
            }).then(res => {
                resolve(res.data);
            }).catch(err => {
                console.log(err);
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

    synchronized() {
        var data = Object.assign({}, this.attributes);
        console.log("SYNC : ", data);
        var changedData = Object.assign({}, this.attributes);
        return new Promise(async (resolve, reject) => {
            // Senkronize Edilelecek Data Var
            if (Object.keys(data).filter(e => typeof data[e] === "object").length > 0) {
                var count = 0;
                Object.keys(data).filter(e => typeof data[e] === "object").forEach(element => {
                    // Objele Array mi ?
                    if (Array.isArray(data[element])) {
                        changedData[element] = [];
                        data[element].forEach(arrayData => {
                            if (arrayData.id !== undefined) {
                                // Güncelle
                                axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + element, {
                                    selector: "update",
                                    criteria: { id: arrayData.id },
                                    initialValues: null,
                                    valuesToSet: arrayData
                                }).then(res => {
                                    changedData[element].push(res.data.id);
                                    count++;
                                });
                            } else {
                                // Yeni
                                axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + element, {
                                    selector: "create",
                                    criteria: null,
                                    initialValues: arrayData,
                                    valuesToSet: null
                                }).then(res => {
                                    changedData[element].push(res.data.id);
                                    count++;
                                });
                            }
                        });
                    } else {
                        if (data[element] !== null) {
                            if (data[element].id !== undefined) {
                                // Güncelle
                                axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + element, {
                                    selector: "update",
                                    criteria: { id: data[element].id },
                                    initialValues: null,
                                    valuesToSet: data[element]
                                }).then(res => {
                                    changedData[element] = res.data.id;
                                    count++;
                                });
                            } else {
                                // Yeni
                                axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + element, {
                                    selector: "create",
                                    criteria: null,
                                    initialValues: data[element],
                                    valuesToSet: null
                                }).then(res => {
                                    changedData[element] = res.data.id;
                                    count++;
                                });
                            }
                        }
                    }
                    if (Object.keys(data).filter(e => typeof data[e] === "object").length - 1 === count) {
                        resolve(changedData)
                    }
                });
            }
            // Senkronize Edilelecek Data Yok
            else {
                resolve(changedData);
            }
        });
    }

}