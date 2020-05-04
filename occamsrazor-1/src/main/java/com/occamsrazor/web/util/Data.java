package com.occamsrazor.web.util;

import java.io.File;

public enum Data {
	USER_PATH, ADMIN_PATH, CSV, USER_LIST,ADMIN_LIST;
	
	@Override
	public String toString() {
		String returnValue = "";
		switch(this) {
		case USER_PATH: returnValue = "C:"+File.separator+"Users"+File.separator+"bit22"+File.separator+"git"
										+File.separator+"repository2"+File.separator+"occamsrazor-1"+File.separator+"src"
										+File.separator+"main"+File.separator+"resources"+File.separator+"static"
										+File.separator+"resources"+File.separator+"file"+File.separator;
			break;
		case ADMIN_PATH: returnValue = "C:"+File.separator+"Users"+File.separator+"bit22"+File.separator+"git"
				+File.separator+"repository2"+File.separator+"occamsrazor-1"+File.separator+"src"
				+File.separator+"main"+File.separator+"resources"+File.separator+"static"
				+File.separator+"resources"+File.separator+"file"+File.separator;
			break;	
		case CSV : returnValue = ".csv";
			break;
		case USER_LIST : returnValue = "user_list";
		break;
		case ADMIN_LIST : returnValue = "admin_list";
		break;
		default:
			break;
		}
		return returnValue;
	}
}
