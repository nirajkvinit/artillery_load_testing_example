## Run the script

In order to run the load testing with artillery run the following command from your terminal
**Just to run the load test**
`artillery run <artillery_yaml_file>`
eg: `artilerry run load_test.yaml`

**Run the load test and generate json report**
`artillery run --output <report_file_path_and_name.json> <artillery_yaml_file>`
eg: `artillery run --output report.json load_test.yaml`

**Generate HTML report from the load test report json file**
`artillery report --output report.html report.json`

### Assumptions

Following assumptions are being made before you run the script

- This Repository is cloned
- npm packages are installed (Run `npm i` in project's root dir)
- Node server is running (`npm start`)
- Artillery is installed in your system globally (`npm i -g artillery`)
