package com.occamsrazor.web.util;

import java.io.File;

public enum Data {
<<<<<<< HEAD
	HOME_PATH, PATH, CSV, USER_LIST,ADMIN_LIST, LOST_LIST;
=======
	HOME_PATH, PATH, CSV, USER_LIST,ADMIN_LIST;
>>>>>>> branch '3_di' of https://github.com/wnsghk16/Springboot_jpa.git
	
	@Override
	public String toString() {
		String returnValue = "";
		switch(this) {
		case PATH: returnValue = "C:"+File.separator+"Users"+File.separator+"bit22"+File.separator+"git"
										+File.separator+"repository2"+File.separator+"occamsrazor-1"+File.separator+"src"
										+File.separator+"main"+File.separator+"resources"+File.separator+"static"
										+File.separator+"resources"+File.separator+"file"+File.separator;
			break;
		case HOME_PATH: returnValue = "C:"+File.separator+"Users"+File.separator+"준화"+File.separator+"git"+File.separator+"Springboot_jpa"
				+File.separator+"occamsrazor-1"+File.separator+"src"
				+File.separator+"main"+File.separator+"resources"+File.separator+"static"
				+File.separator+"resources"+File.separator+"file"+File.separator;
		break;	
		case CSV : returnValue = ".csv";
			break;
		case USER_LIST : returnValue = "user_list";
		break;
		case ADMIN_LIST : returnValue = "admin_list";
		break;
		case LOST_LIST : returnValue = "lost_list";
		break;
		default:
			break;
		}
		return returnValue;
	}
}