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
        return new Promise(async (resolve, reject) => {
            await Object.keys(this.attributes).forEach(async (element) => {
                var type = typeof this.attributes[element];
                if (type === 'object') {
                    if (Array.isArray(this.attributes[element])) {
                        var createData = [];
                        await this.attributes[element].forEach(async (data) => {
                            await axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + element, {
                                selector: "create",
                                criteria: null,
                                initialValues: data,
                                valuesToSet: null
                            }).then(res => {
                                createData.push(res.data.id);
                            }).catch(err => {
                                console.log(err);
                            });
                        });
                        setTimeout(() => {
                            this.attributes[element] = createData;
                        }, 20);
                    } else {
                        if (this.attributes[element] !== null) {
                            await axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + element, {
                                selector: "create",
                                criteria: null,
                                initialValues: this.attributes[element],
                                valuesToSet: null
                            }).then(res => {
                                this.attributes[element] = res.data.id;
                            }).catch(err => {
                                console.log(err);
                            });
                        }
                    }
                }
            });
            setTimeout(() => {
                axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + this.model, {
                    selector: "create",
                    criteria: null,
                    initialValues: this.attributes,
                    valuesToSet: null
                }).then(res => {
                    resolve(res.data);
                    console.log("Bitti");
                }).catch(err => {
                    reject(err);
                    console.log(err);
                });
            }, 50);
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
            var count = 0;
            var totalProcess = 0;
            // Total Process
            await Object.keys(this.attributes).forEach(async (element) => {
                var type = typeof this.attributes[element];
                if (type === 'object') {
                    if (Array.isArray(this.attributes[element])) {
                        this.attributes[element].forEach(element => {
                            totalProcess++;
                        });
                    } else {
                        totalProcess++;
                    }
                }
            });

            // Process
            await Object.keys(this.attributes).forEach(async (element) => {
                var type = typeof this.attributes[element];
                if (type === 'object') {
                    if (Array.isArray(this.attributes[element])) {
                        var createData = [];
                        await this.attributes[element].forEach(async (data) => {
                            if (data.id === undefined) {
                                await axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + element, {
                                    selector: "create",
                                    criteria: null,
                                    initialValues: data,
                                    valuesToSet: null
                                }).then(res => {
                                    createData.push(res.data.id);
                                    count++;
                                }).catch(err => {
                                    console.log(err);
                                });
                            } else {
                                await axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + element, {
                                    selector: "update",
                                    criteria: { id: data.id },
                                    initialValues: null,
                                    valuesToSet: data
                                }).then(res => {
                                    createData.push(res.data.id);
                                    count++;
                                }).catch(err => {
                                    console.log(err);
                                });
                            }
                            // Değer Atama
                            if (this.attributes[element].length - 1 === count) {
                                this.attributes[element] = createData;
                            }
                        });
            
                    } else {
                        this.attributes[element] = 9;
                        if (this.attributes[element].id === undefined) {
                            if (this.attributes[element] !== null) {
                                await axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + element, {
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
                            if (this.attributes[element] !== null) {
                                var id = this.attributes[element].id;
                                delete this.attributes[element].id;
                                console.log(this.attributes[element]);
                                await axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + element, {
                                    selector: "update",
                                    criteria: { id: id },
                                    initialValues: null,
                                    valuesToSet: this.attributes[element]
                                }).then(res => {
                                    this.attributes[element] = res.data.id;
                                    count++;
                                }).catch(err => {
                                    console.log(err);
                                });
                            }
                        }
                    }
                }
            });

            // Tüm İşlemler Tamamlandığında Güncelle
            setTimeout(() => {
                console.log(count);
                console.log(totalProcess);
                if (count === totalProcess) {
                    if (criteria === undefined) {
                        criteria = {};
                    }
                    axios.post(this.path + "/orm?projectId=" + this.projectId + "&model=" + this.model, {
                        selector: "update",
                        criteria: criteria,
                        initialValues: null,
                        valuesToSet: this.attributes
                    }).then(res => {
                        console.log("Update OK");
                        console.log(res.data);
                        resolve(res.data);
                    }).catch(err => {
                        reject(err);
                        console.log(err);
                    });
                } else {
                    console.log("Süreçler Tamamlanmadı.");
                }
            }, 200);
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