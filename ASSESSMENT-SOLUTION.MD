# QA Engineer Assessment Solution

## Introduction

Use this file to document your solution and findings.

Name: Sripriya Srinivasan

Email: sripriyavasan@gmail.com

## Remarks 

The feature files themselves serve as a living document for test plan. 

From the test results, The following tests failed:

1. Make a intial search for People/Planets. Clear the search box and click "Search" button without any input.
* Expected: The old results should be removed.
* Actual: The old results are not removed. (The two failing test case in this suit)

2. Make a intial search for People/Planets empty string.
* Expected: No results should be displayed.
* Actual: Able to get the results for top 10 People/Planets. Its a error in the backend.