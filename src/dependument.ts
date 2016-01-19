import * as fs from 'fs';
import { DependumentManager } from './dependument.manager';
import { FileSystem } from './filesystem/filesystem';

export class Dependument {
  constructor() {
    var fileSystem = new FileSystem(fs);
    var manager = new DependumentManager(fileSystem);
  }
}

(function() {
  new Dependument();
})();
