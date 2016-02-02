export class Adapter {
  private static FILE_TEMPLATE: string = "# Dependencies\n## For users\n{{dependencies}}\n\n## For developers\n{{devDependencies}}";
  private static DEPENCENCY_TEMPLATE: string = "* [{{package_name}}]({{package_url}}) ({{package_version}})\n";

  public static getFileOutput(dependencies: string[][]) {

  }
}
