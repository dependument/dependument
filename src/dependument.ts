import * as fs from 'fs';
import { DependumentManager } from './dependument.manager';
import { FileSystem } from './filesystem/filesystem';
import { TemplateFileSystem } from './templates/templatefilesystem';

export class Dependument {
  constructor() {
    var fileSystem = new FileSystem(fs);
    var templateFileSystem = new TemplateFileSystem(fs);
    var manager = new DependumentManager(fileSystem, templateFileSystem);
  }
}

(function() {
  new Dependument();
})();
