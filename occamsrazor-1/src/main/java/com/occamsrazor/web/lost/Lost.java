package com.occamsrazor.web.lost;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component
@Getter @Setter
public class Lost {
	String lostId,name,lostDate,group,location;
	
	 @Override
	public String toString() {
		// TODO Auto-generated method stub
		return String.format("%s,%s,%s,%s,%s", 
				lostId,name,lostDate,group,location);
	}
}
