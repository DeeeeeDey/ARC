@echo off
title ARC Landing Page Auto-Detector
echo Starting Auto-Detector...
powershell.exe -ExecutionPolicy Bypass -NoProfile -File "%~dp0auto-detect.ps1"
pause
