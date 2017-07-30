#hospital2 bot

from __future__ import print_function

import time

from satori.rtm.client import make_client

endpoint = "###########"
appkey = "#########"

def main():
    with make_client(endpoint=endpoint, appkey=appkey) as client:
        print('Streaming hospital2 data')
        timer = 0


        while True:

            def on_publish_ack(pdu):
                if pdu['action'] == 'rtm/publish/ok':
                    print('Publish confirmed')
                else:
                    print(
                        'Failed to publish. '
                        'RTM replied with the error {0}: {1}'.format(
                            pdu['body']['error'], pdu['body']['reason']))

            message = {"time": "%s" %timer, "patients": "12"}
            client.publish("hospital2", message, callback=on_publish_ack)
            timer = timer + 5
            time.sleep(5)
            if (timer == 20):
                    timer = 0




if __name__ == '__main__':
    main()
