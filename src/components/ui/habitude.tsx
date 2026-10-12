import { useState } from 'react';
import { Text, View } from 'react-native';

export function Habitude() {
  
  const [nbDaysCheckboxes, setNbDaysCheckboxes] = useState(7)
  
  return (
    <>
    <View style={{ display: 'flex', gap: 10, flexDirection: 'row' }}>
      <Text>Habitude</Text>
        <input type="button" id="dayButton" name="dayButton" value="7 dernier jours pkw" onClick={() => setNbDaysCheckboxes(7)} />
        <input type="button" id="monthButton" name="monthButton" value="31 dernier jours pkw" onClick={() => setNbDaysCheckboxes(31)} />
        <input type="button" id="yearButton" name="yearButton" value="365 dernier jours pkw" onClick={() => setNbDaysCheckboxes(365)} />
    </View>


        {Array.from({ length: nbDaysCheckboxes }).map((_, index) => ( 
            <input key={index} type="checkbox" id={`checkbox-${index}`} name={`checkbox-${index}`} value="oui" />
        ))}
      
    </>
  )
}