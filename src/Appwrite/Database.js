import { Client, Databases } from "appwrite";
import conf from "../script";
console.log(conf.appwrite_url)
console.log(conf.project_id)
console.log(conf.database_id)
console.log(conf.collection_id)

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwrite_url)
            .setProject(conf.project_id);
        this.databases = new Databases(this.client);
    }


    async allPosts(){
        try {
            return await this.databases.listDocuments(conf.database_id, conf.collection_id);
        } catch (error) {
            // console.log('this is error: ', error);
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.database_id,conf.collection_id,slug);
        } catch (error) {
            console.log('this is getpost error: ', error)
        }
    }
}

const service = new Service()

export default service;