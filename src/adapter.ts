export class Adapter {
  private static FILE_TEMPLATE: string = "# Dependencies\n## For users\n{{dependencies}}\n\n## For developers\n{{devDependencies}}";
  private static DEPENCENCY_TEMPLATE: string = "* [{{package_name}}]({{package_url}}) ({{package_version}})\n";

  public static getFileOutput(dependencies: string[][]) {

  }

  private static getDependenciesOutput(dependencies: string[]): string {
    if (!dependencies || dependencies.length === 0) {
      return undefined;
    }

    let output = "";

    Object.keys(dependencies).forEach(function (key) {
      let name = key;
      let version = dependencies[key];
      let url = "https://www.npmjs.com/package/" + name;

      let line = Adapter.DEPENCENCY_TEMPLATE
                  .replace("{{package_name}}", name)
                  .replace("{{package_url}}", url)
                  .replace("{{package_version}}", version);

      output += line;
    });

    return output;
  }
}
