package com.occamsrazor.web.util;

public enum Messenger {
	SUCCESS, FAIL, FILE_INSERT_ERROR;
	
	@Override
	public String toString() {
		String resultValue="";
		switch(this) {
		case FILE_INSERT_ERROR: resultValue="파일 출력 시 에러 발생";
			break;
		default:
			break;
		}
		return resultValue;
	}
}