export default class ViewEyes {
  eyesAPI = 'zFolHPYl3s8igt4wo99GPULREdzBE2TuOcs6X36QxXro110';
  appName: string;
  testName: string;
  runAsBatch: boolean;
  changeTest: boolean;
  fullScreenShot: boolean;
  resultStr: string;
  batchName: any;
  batchId: any;

  constructor(testName, batchName, batchId) {
    // In case you need to create a new baseline just change appname and testname below.
    this.appName = 'Protractor Framework ';
    this.testName = testName;
    this.batchName = batchName;
    this.batchId = batchId;
    // runAsBatch to be set to true in case of jenkins CI.
    this.runAsBatch = true;
    this.changeTest = true;
    this.fullScreenShot = true;
    this.resultStr = '';
  }

  setup(eyes) {
    eyes.setApiKey(this.eyesAPI);
    eyes.setBatch(this.batchName, this.batchId);

    eyes.setForceFullPageScreenshot(this.fullScreenShot);
    if (this.runAsBatch === false) {
      eyes.setBatch(
        process.env.APPLITOOLS_BATCH_NAME,
        process.env.APPLITOOLS_BATCH_ID
      );
    }
    // Eliminate artifacts caused by a blinking cursor - on by default in latest SDK
    eyes.setIgnoreCaret(true);
  }
  // Handling results from EYES in console
  handleResult(result) {
    const totalSteps = result.steps;
    if (result.isNew) {
      this.resultStr = 'New Baseline Created: ' + totalSteps + ' steps';
    } else if (result.isPassed) {
      this.resultStr = 'All steps passed: ' + totalSteps + ' steps';
    } else {
      this.resultStr = 'Test Failed:';
      this.resultStr += ' matches=' + result.matches; /* matched the baseline */
      this.resultStr += ' missing=' + result.missing; /* missing in the test*/
      this.resultStr +=
        ' mismatches=' + result.mismatches; /* did not match the baseline */
    }
    this.resultStr += '\n' + 'results at ';
    console.log(this.resultStr);
  }
}
