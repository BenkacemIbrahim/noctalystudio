---
name: Bug report
description: Report a problem with the website
title: "[Bug]: "
labels: ["bug"]
body:
  - type: markdown
    attributes:
      value: Thanks for taking the time to file a bug report.
  - type: textarea
    id: description
    attributes:
      label: Description
      description: A clear and concise description of the bug.
    validations:
      required: true
  - type: textarea
    id: steps
    attributes:
      label: Steps to reproduce
      placeholder: |
        1. Go to '...'
        2. Click on '...'
        3. See error
    validations:
      required: true
  - type: textarea
    id: expected
    attributes:
      label: Expected behavior
    validations:
      required: true
  - type: textarea
    id: environment
    attributes:
      label: Environment
      description: Browser, OS, device, and screen size.
      placeholder: e.g. Chrome 130 on macOS 15, 1440x900
    validations:
      required: false
