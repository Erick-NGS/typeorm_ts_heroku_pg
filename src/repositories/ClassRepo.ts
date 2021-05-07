import { EntityRepository, Repository } from "typeorm";
import { ClassModel } from "../models/ClassModel";

@EntityRepository(ClassModel)
export default class ClassRepo extends Repository<ClassModel> {
  public async findByName(name: string) : Promise<ClassModel[]> {
    return this.find({
      where: {
        name
      }
    })
  }
}