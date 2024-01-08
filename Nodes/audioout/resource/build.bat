chcp 437
CALL "C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars32.bat"
pushd %IDF_PATH%
CALL "C:\Espressif\idf_cmd_init.bat"
popd
@echo mcconfig -d -x localhost:5004 -m -p esp32/m5stack_core2
mcconfig -d -x localhost:5004 -m -p esp32/m5stack_core2